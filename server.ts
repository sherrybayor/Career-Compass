import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Gemini Client with correct telemetry header as requested
const geminiApiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (geminiApiKey) {
  ai = new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("GEMINI_API_KEY is not defined in the environment. AI Analysis features will fallback to local scoring.");
}

// API: Check Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// API: AI-Powered Career Analysis
app.post('/api/gemini/analyze', async (req, res) => {
  try {
    const { gradeLevel, answers, scores, results } = req.body;

    if (!ai) {
      console.warn("Falling back to local results because Gemini API client is not initialized.");
      return res.json({
        ...results,
        aiConfidenceScore: 68, // Indicate slightly lower confidence on local fallback
        uncertaintyFlagged: true,
        assumptions: "Generated using standard deterministic local psychometric scoring mapping. AI client was offline."
      });
    }

    let gradeSpecificInstructions = '';
    if (gradeLevel === 'Grade 9') {
      gradeSpecificInstructions = `
You are creating a GRADE 9 EXPLORATION REPORT.
Target Age: 12-14 years.
Purpose: Career Exploration.
CRITICAL RULES FOR GRADE 9 WRITING STYLE & CONTENT:
1. Do NOT present careers as final decisions. The objective is to help students discover interests, strengths, and possible future directions.
2. Use simple English suitable for a Junior Secondary School student in Nigeria.
3. Keep sentences short.
4. Avoid technical career terminology.
5. Explain every concept as though speaking to a 13-year-old.
   - Instead of: "You demonstrate strong analytical reasoning." -> Write: "You enjoy solving problems step by step. This means you may enjoy subjects where you investigate, calculate, or find solutions."
   - Instead of: "Your personality aligns with investigative occupations." -> Write: "You enjoy asking questions and finding out how things work."
6. Never recommend university courses in the pathways or the reasoning.
7. Never recommend JAMB combinations.
8. Never mention salaries.
9. Never pressure students to choose one career.
10. The encouragingAdvice field MUST end with exactly: "Remember, this is the beginning of your journey. As you learn and grow, your interests may" (do not complete the sentence, stop right there at the word "may").

For Grade 9, you MUST populate the "grade9Report" field matching the structure below:
  "grade9Report": {
    "whatMakesYouSpecial": "A warm paragraph in very simple English explaining their core traits. Speaking directly to a 13-year-old.",
    "thingsYouEnjoyDoing": ["3 fun, simple, non-work things they enjoy doing, written in simple 13-year-old terms"],
    "subjectsYouMayEnjoy": ["4 junior secondary school subjects they may enjoy, e.g. Basic Science, Basic Technology, Business Studies, Creative Arts"],
    "skillsYouCanStartBuilding": ["3 simple skills to start building, written in encouraging 13-year-old terms"],
    "funCareerIdeasToExplore": [
      { "name": "Fun Job Title 1", "description": "Simple description of what they do, e.g. helping design games or building robots, in simple terms" },
      { "name": "Fun Job Title 2", "description": "Simple description" },
      { "name": "Fun Job Title 3", "description": "Simple description" }
    ],
    "activitiesYouShouldTry": ["3 fun, practical offline activities to try"],
    "clubsToJoin": ["3 school clubs to join, e.g. JETS Club, Literary and Debating Society, Young Farmers Club"],
    "projectsYouCanBuild": ["3 fun projects they can build at home or school using simple materials"],
    "encouragingAdvice": "Encouraging, inspiring advice paragraph that MUST end with exactly the phrase: 'Remember, this is the beginning of your journey. As you learn and grow, your interests may'"
  }
`;
    } else if (gradeLevel === 'Grade 12') {
      gradeSpecificInstructions = `
You are creating a GRADE 12 TRANSITION & HIGHER EDUCATION REPORT.
Target Age: 15-18 years.
Purpose: Higher Education and Transition.
CRITICAL RULES FOR GRADE 12:
1. Focus on specific pathway choices, academic readiness, and transitioning to tertiary institutions.
2. Recommend concrete JAMB combinations and relevant O'Level/WAEC requirements.
3. Recommend higher institutions (universities or polytechnics in Nigeria) and online preparatory courses.
4. Mention scholarships and strategic admission next steps.
5. Use professional yet encouraging and clear secondary-level English.

For Grade 12, you MUST populate the "grade12Report" field matching the structure below:
  "grade12Report": {
    "pathwayFit": "A comprehensive paragraph explaining their tertiary academic track and readiness.",
    "jambSubjectCombinations": [
      { "careerName": "Career Option 1", "subjects": "English, Mathematics, and other 2 UTME subjects required" },
      { "careerName": "Career Option 2", "subjects": "UTME subject combination" },
      { "careerName": "Career Option 3", "subjects": "UTME subject combination" }
    ],
    "recommendedInstitutions": ["3 specific Nigerian universities or polytechnics strong in this field"],
    "scholarshipsToApply": ["3 local or national scholarships they can target in Nigeria"],
    "admissionStrategicSteps": ["3 strategic steps for secondary graduates to secure admission"],
    "careerCertifications": ["3 basic or entry-level certifications they can start preparing for"]
  }
`;
    } else {
      gradeSpecificInstructions = `
You are creating an UNDERGRADUATE CAREER ENTRY & EMPLOYABILITY REPORT.
Target Age: 18+ years.
Purpose: Professional Entry and Job Market Readiness.
CRITICAL RULES FOR UNDERGRADUATES:
1. Speak in a highly professional, analytical, and action-oriented tone.
2. Focus on employability, specialized graduate programs, technical skills gap, real-world portfolio projects, and networking.
3. Recommend specific professional bodies and local tech/business hubs.
4. Provide structured, data-driven advice.

For Undergraduate, you MUST populate the "undergraduateReport" field matching the structure below:
  "undergraduateReport": {
    "employmentReadinessAnalysis": "A deep professional analysis of their readiness for the job market, highlight strengths and areas to develop.",
    "targetGraduatePrograms": ["3 high-impact graduate trainee schemes or programs in Nigeria"],
    "keyPortfolioProjects": [
      { "name": "Project Name 1", "description": "A technical or business portfolio project they can build to show to employers" },
      { "name": "Project Name 2", "description": "Another specific project description" }
    ],
    "networkingProfessionalBodies": ["3 professional associations, registration bodies, or local hubs (e.g. NIM, CPN, CcHub)"],
    "skillsGapStrategy": ["3 concrete ways to close their technical or professional skills gaps"]
  }
`;
    }

    const prompt = `
You are an expert psychometrician, educational psychologist, and senior career counselor. 
Analyze the following career assessment results for a Nigerian student at the "${gradeLevel}" level.

CORE DATA:
- Scores across dimensions: ${JSON.stringify(scores)}
- Local career matches calculated: ${JSON.stringify(results.topCareers)}
- Total questions answered: ${Object.keys(answers).length}

COMPLIANCE MANDATES:
1. NO STEM BIAS: Give balanced representation across Science & Technology, Arts & Humanities, Commercial & Business, Emerging, and Entrepreneurial streams. Never assume Science is superior.
2. NIGERIAN CONTEXT: Ensure recommendations align with the Nigerian educational system (e.g. WAEC, NECO, BECE, JAMB, Polytechnic vs. University pathways).
3. GRADE-SPECIFIC RECOMMENDATIONS:
${gradeSpecificInstructions}

4. QUALITY ASSURANCE: Include a validation report confirming no duplicated questions, balanced career stream coverage, and fair representation.

Please produce a JSON report matching the following structure:
{
  "careerMatchScore": number (35 to 98),
  "careerReadinessScore": number (35 to 98),
  "aiConfidenceScore": number (70 to 98),
  "futureSkillsScore": number (35 to 98),
  "learningStyle": "string",
  "personalityType": "string",
  "topStrengths": ["string", "string", "string"],
  "topSkills": ["string", "string", "string"],
  "scienceTechCareers": ["string", "string", "string"],
  "artsHumanitiesCareers": ["string", "string", "string"],
  "commercialBusinessCareers": ["string", "string", "string"],
  "emergingCareers": ["string", "string", "string"],
  "entrepreneurialCareers": ["string", "string", "string"],
  "swotAnalysis": {
    "strengths": ["string"],
    "weaknesses": ["string"],
    "opportunities": ["string"],
    "threats": ["string"]
  },
  "educationalPathways": {
    "universityCourses": ["string"],
    "polytechnicProgrammes": ["string"],
    "certifications": ["string"],
    "onlineCourses": ["string"],
    "books": ["string"],
    "competitions": ["string"],
    "internships": ["string"],
    "volunteerOpportunities": ["string"],
    "careerClubs": ["string"]
  },
  "reasoning": {
    "Career Name": "Detailed paragraph explaining the match based on the student's profile, including appropriate guidance"
  },
  "grade9Report": {
    "whatMakesYouSpecial": "string",
    "thingsYouEnjoyDoing": ["string"],
    "subjectsYouMayEnjoy": ["string"],
    "skillsYouCanStartBuilding": ["string"],
    "funCareerIdeasToExplore": [{ "name": "string", "description": "string" }],
    "activitiesYouShouldTry": ["string"],
    "clubsToJoin": ["string"],
    "projectsYouCanBuild": ["string"],
    "encouragingAdvice": "string"
  },
  "grade12Report": {
    "pathwayFit": "string",
    "jambSubjectCombinations": [{ "careerName": "string", "subjects": "string" }],
    "recommendedInstitutions": ["string"],
    "scholarshipsToApply": ["string"],
    "admissionStrategicSteps": ["string"],
    "careerCertifications": ["string"]
  },
  "undergraduateReport": {
    "employmentReadinessAnalysis": "string",
    "targetGraduatePrograms": ["string"],
    "keyPortfolioProjects": [{ "name": "string", "description": "string" }],
    "networkingProfessionalBodies": ["string"],
    "skillsGapStrategy": ["string"]
  },
  "validationReport": {
    "noDuplicatedQuestions": true,
    "balancedCareerCoverage": true,
    "balancedScenarioDistribution": true,
    "balancedScoringWeights": true,
    "fairRepresentation": true,
    "summaryText": "Brief description confirming unbiased evaluation and stream distribution"
  },
  "assumptions": "Stated psychological or psychometric assumptions",
  "uncertainties": "List any flagged diagnostic ambiguities"
}

Respond ONLY with valid JSON. Do not include markdown code block formatting (e.g. \`\`\`json). Output raw clean JSON.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
    });

    const responseText = response.text || '{}';
    // Parse response cleanly, stripping any potential markdown formatting
    const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    try {
      const parsedResults = JSON.parse(cleanedText);
      // Safe deep merge of results and parsedResults to prevent partial overrides from blanking fields
      const mergedResults = {
        ...results,
        ...parsedResults,
        topCareers: parsedResults.topCareers || results.topCareers || [],
        grade9Report: parsedResults.grade9Report || results.grade9Report || null,
        grade12Report: parsedResults.grade12Report || results.grade12Report || null,
        undergraduateReport: parsedResults.undergraduateReport || results.undergraduateReport || null,
        swotAnalysis: {
          strengths: parsedResults.swotAnalysis?.strengths || results.swotAnalysis?.strengths || [],
          weaknesses: parsedResults.swotAnalysis?.weaknesses || results.swotAnalysis?.weaknesses || [],
          opportunities: parsedResults.swotAnalysis?.opportunities || results.swotAnalysis?.opportunities || [],
          threats: parsedResults.swotAnalysis?.threats || results.swotAnalysis?.threats || []
        },
        educationalPathways: {
          universityCourses: parsedResults.educationalPathways?.universityCourses || results.educationalPathways?.universityCourses || [],
          polytechnicProgrammes: parsedResults.educationalPathways?.polytechnicProgrammes || results.educationalPathways?.polytechnicProgrammes || [],
          certifications: parsedResults.educationalPathways?.certifications || results.educationalPathways?.certifications || [],
          onlineCourses: parsedResults.educationalPathways?.onlineCourses || results.educationalPathways?.onlineCourses || [],
          books: parsedResults.educationalPathways?.books || results.educationalPathways?.books || [],
          competitions: parsedResults.educationalPathways?.competitions || results.educationalPathways?.competitions || [],
          internships: parsedResults.educationalPathways?.internships || results.educationalPathways?.internships || [],
          volunteerOpportunities: parsedResults.educationalPathways?.volunteerOpportunities || results.educationalPathways?.volunteerOpportunities || [],
          careerClubs: parsedResults.educationalPathways?.careerClubs || results.educationalPathways?.careerClubs || []
        },
        reasoning: {
          ...(results.reasoning || {}),
          ...(parsedResults.reasoning || {})
        },
        validationReport: {
          ...(results.validationReport || {}),
          ...(parsedResults.validationReport || {})
        }
      };
      return res.json(mergedResults);
    } catch (parseError) {
      console.error("Failed to parse Gemini output as JSON, returning fallback local results.", parseError, responseText);
      return res.json({
        ...results,
        aiConfidenceScore: 72,
        uncertaintyFlagged: true,
        assumptions: "Using local psychometric engine because the AI generated text was unstructured."
      });
    }
  } catch (error) {
    console.error("Error in Gemini analysis route:", error);
    res.status(500).json({ error: "Failed to generate AI-powered report" });
  }
});

// Configure Vite or Static Serve based on environment
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite dev middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static production files...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CareerCompass AI server booting on port ${PORT}`);
  });
}

setupServer();
