export type UserRole = 'Student' | 'Teacher' | 'Parent' | 'Counsellor' | 'Administrator';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  school?: string;
  createdAt: any; // Firestore Timestamp
}

export type GradeLevel = 'Grade 9' | 'Grade 12' | 'Undergraduate';

export interface AssessmentQuestion {
  id: string;
  text: string;
  category: string; // RIASEC category, or Aptitude, Strength, Values, etc.
  subCategory?: string; // e.g. Verbal Reasoning, Digital Literacy
  type: 'likert' | 'situational' | 'multiple-choice' | 'image-placeholder';
  options?: { value: number | string; label: string }[];
}

export interface CareerProfile {
  id: string;
  name: string;
  description: string;
  sector: string; // e.g., Tech, Healthcare, Finance, Arts
  stream: 'Science & Technology' | 'Arts & Humanities' | 'Commercial & Business' | 'Emerging' | 'Entrepreneurial';
  salaryNigeria: string; // in Naira (e.g., ₦150k - ₦400k/month or annual ₦2m - ₦6m)
  salaryGlobal: string; // in USD
  skillsRequired: string[];
  universityCourses: string[];
  polytechnicCourses: string[];
  professionalCertifications: string[];
  futureDemand: 'High' | 'Medium' | 'Low';
  aiRisk: 'Low' | 'Medium' | 'High';
  automationRisk: 'Low' | 'Medium' | 'High';
  dayInTheLife: string;
  recommendedBooks: string[];
  recommendedYouTubeChannels: string[];
  requiredSubjects: {
    waec: string[];
    jamb: string[];
  };
  universitiesOffering: string[];
  whyMatchExplanation?: string; // Dynamic justification field
}

export interface AssessmentScores {
  [category: string]: number;
}

export interface AssessmentResults {
  studentName?: string;
  topCareers: string[]; // IDs or names of top matches
  scienceTechCareers?: string[]; // IDs or names
  artsHumanitiesCareers?: string[]; // IDs or names
  commercialBusinessCareers?: string[]; // IDs or names
  emergingCareers?: string[]; // IDs or names
  entrepreneurialCareers?: string[]; // IDs or names
  scores: AssessmentScores;
  careerMatchScore: number;
  careerReadinessScore: number;
  aiConfidenceScore: number;
  futureSkillsScore: number;
  learningStyle: string;
  personalityType: string;
  topStrengths: string[];
  topSkills: string[];
  swotAnalysis: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  educationalPathways: {
    universityCourses: string[];
    polytechnicProgrammes: string[];
    certifications: string[];
    onlineCourses: string[];
    books: string[];
    competitions: string[];
    internships: string[];
    volunteerOpportunities: string[];
    careerClubs: string[];
  };
  reasoning: { [careerName: string]: string };
  grade9Report?: {
    whatMakesYouSpecial: string;
    thingsYouEnjoyDoing: string[];
    subjectsYouMayEnjoy: string[];
    skillsYouCanStartBuilding: string[];
    funCareerIdeasToExplore: { name: string; description: string }[];
    activitiesYouShouldTry: string[];
    clubsToJoin: string[];
    projectsYouCanBuild: string[];
    encouragingAdvice: string;
  };
  grade12Report?: {
    pathwayFit: string;
    jambSubjectCombinations: { careerName: string; subjects: string }[];
    recommendedInstitutions: string[];
    scholarshipsToApply: string[];
    admissionStrategicSteps: string[];
    careerCertifications: string[];
  };
  undergraduateReport?: {
    employmentReadinessAnalysis: string;
    targetGraduatePrograms: string[];
    keyPortfolioProjects: { name: string; description: string }[];
    networkingProfessionalBodies: string[];
    skillsGapStrategy: string[];
  };
  validationReport?: {
    noDuplicatedQuestions: boolean;
    balancedCareerCoverage: boolean;
    balancedScenarioDistribution: boolean;
    balancedScoringWeights: boolean;
    fairRepresentation: boolean;
    summaryText: string;
  };
}

export interface AssessmentRecord {
  id: string;
  userId: string;
  gradeLevel: GradeLevel;
  progress: number;
  currentQuestionIndex: number;
  answers: { [questionId: string]: number | string };
  scores?: AssessmentScores;
  results?: AssessmentResults;
  completed: boolean;
  updatedAt: any; // Firestore Timestamp
}
