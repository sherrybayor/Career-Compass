import React from 'react';
import { Award, GraduationCap, Printer, Compass, Sparkles, BookOpen, User, Book, Briefcase, HelpCircle, Download, Heart, Target, Users } from 'lucide-react';
import { AssessmentResults, GradeLevel } from '../types';
import BrandLogo from './BrandLogo';

interface ResultsDisplayProps {
  results: AssessmentResults;
  gradeLevel: GradeLevel;
  onReset: () => void;
}

export default function ResultsDisplay({ results, gradeLevel, onReset }: ResultsDisplayProps) {
  const scoreCards = [
    { label: 'CAREER MATCH', score: results.careerMatchScore, desc: 'Highest category compatibility', color: 'text-brand-teal bg-brand-teal/10' },
    { label: 'CAREER READINESS', score: results.careerReadinessScore, desc: 'Aptitude & confidence index', color: 'text-brand-primary bg-brand-primary/10' },
    { label: 'FUTURE SKILLS', score: results.futureSkillsScore, desc: 'Digital literacy & AI readiness', color: 'text-brand-gold bg-brand-gold/10' },
    { label: 'AI CONFIDENCE', score: results.aiConfidenceScore, desc: 'Diagnostic precision score', color: 'text-emerald-600 bg-emerald-50' }
  ];

  const handlePrint = () => {
    const originalTitle = document.title;
    const formattedName = (results.studentName || 'Student').trim().replace(/[^a-zA-Z0-9]/g, '_');
    const formattedGrade = gradeLevel.trim().replace(/[^a-zA-Z0-9]/g, '_');
    document.title = `${formattedName}_Career_Assessment_Report_${formattedGrade}`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header Panel */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-brand-primary/10 no-print">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-full">
            OFFICIAL ASSESSMENT REPORT
          </span>
          <h1 className="font-display font-bold text-3xl text-brand-primary mt-3">
            {results.studentName ? `${results.studentName}'s Career Profile` : 'Your Career Compass Profile'}
          </h1>
          <p className="text-brand-dark/70 text-xs mt-1">
            {results.studentName ? `Personalized report for ${results.studentName} • ` : ''}Formulated for: <strong className="text-brand-primary">{gradeLevel} Student</strong> • Powered by Gemini 3.5 Flash
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 md:flex-initial px-5 py-2 bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-brand-primary/10 cursor-pointer"
          >
            <Download className="h-4 w-4" />
            Download PDF Report
          </button>
          
          <button
            onClick={onReset}
            className="flex-1 md:flex-initial px-5 py-2 bg-brand-primary/5 hover:bg-brand-primary/10 text-brand-primary border border-brand-primary/10 rounded-xl text-xs font-semibold cursor-pointer"
          >
            Retake Assessment
          </button>
        </div>
      </div>

      {/* PDF Download Guidance Alert - Visible on screen, hidden on print */}
      <div className="no-print bg-brand-teal/5 border border-brand-teal/15 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-brand-primary flex items-center gap-1.5 uppercase tracking-wide">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            Official PDF Generation Desk
          </h4>
          <p className="text-[11px] text-brand-dark/75 leading-relaxed max-w-2xl">
            To download this report as a PDF, click the <strong>Download PDF Report</strong> button. In the printer system prompt that appears, change your destination selection to <strong>"Save as PDF"</strong>.
            {window.self !== window.top && (
              <span className="block mt-1 font-semibold text-brand-primary/90">
                💡 Pro-Tip: For optimal page breaks and crisp print resolution, open this application in a new tab first using the icon in the top-right corner.
              </span>
            )}
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto px-5 py-2.5 bg-brand-teal hover:bg-brand-teal/95 text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 shrink-0 shadow-md shadow-brand-teal/10 cursor-pointer"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>

      {/* Printable Report Header */}
      <div className="hidden print:block text-center border-b border-brand-primary/15 pb-6 mb-10">
        <div className="flex justify-center mb-2">
          <BrandLogo variant="horizontal" size="lg" />
        </div>
        <h2 className="text-sm font-semibold text-brand-dark uppercase mt-4">Personalized Psychometric & Career Guidance Profile</h2>
        {results.studentName && (
          <h3 className="text-lg font-black text-brand-primary uppercase mt-1">
            PREPARED FOR: {results.studentName}
          </h3>
        )}
        <p className="text-[10px] text-brand-dark/60 mt-1">Grade Level: {gradeLevel} • Diagnostic Algorithm Confirmed</p>
      </div>

      {/* Bento Grid: Summary Scores */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {scoreCards.map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-primary/10 shadow-xs text-center relative overflow-hidden print-card">
            <span className="text-[9px] font-mono font-bold text-brand-dark/40 block tracking-wider uppercase mb-1">
              {card.label}
            </span>
            <p className="font-display font-bold text-4xl text-brand-primary">
              {card.score}%
            </p>
            <span className="text-[9px] text-brand-dark/60 mt-1.5 block">
              {card.desc}
            </span>
            <div className={`absolute top-0 right-0 h-2 w-2 rounded-bl-full ${card.color.split(' ')[0]}`}></div>
          </div>
        ))}
      </div>

      {/* Psychometric Traits Bento Box */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Personality & Learning style */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card">
          <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-1.5">
            <User className="h-5 w-5 text-brand-teal" />
            Psychometric Personality & Cognitive Profile
          </h3>

          <div className="space-y-4">
            <div className="bg-brand-bg/50 p-4 rounded-xl border border-brand-primary/5">
              <span className="text-[9px] font-mono font-bold text-brand-dark/40 block uppercase">Personality Archetype</span>
              <p className="font-semibold text-brand-primary text-sm mt-0.5">{results.personalityType}</p>
            </div>

            <div className="bg-brand-bg/50 p-4 rounded-xl border border-brand-primary/5">
              <span className="text-[9px] font-mono font-bold text-brand-dark/40 block uppercase">Dominant Learning Style</span>
              <p className="font-semibold text-brand-primary text-sm mt-0.5">{results.learningStyle}</p>
            </div>
          </div>
        </div>

        {/* Strengths & Skills list */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card">
          <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-1.5">
            <Award className="h-5 w-5 text-brand-gold" />
            Top Strengths & Technical Competencies
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] font-mono font-bold text-brand-dark/40 block uppercase mb-2">Core Strengths</span>
              <div className="flex flex-wrap gap-1.5">
                {(results.topStrengths || []).map((str, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-bold bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-lg">
                    ⚡ {str}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[9px] font-mono font-bold text-brand-dark/40 block uppercase mb-2">Acquired Skillsets</span>
              <div className="flex flex-wrap gap-1.5">
                {(results.topSkills || []).map((sk, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-bold bg-brand-teal/10 text-brand-teal px-2.5 py-1 rounded-lg">
                    ✓ {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GRADE 9 EXPLORATION REPORT */}
      {gradeLevel === 'Grade 9' && results.grade9Report && (
        <div className="space-y-10">
          {/* Section 1: What makes you special */}
          <div className="bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-10 shadow-xs print-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-brand-primary"></div>
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-brand-gold" />
              What Makes You Special
            </h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              {results.grade9Report.whatMakesYouSpecial}
            </p>
          </div>

          {/* Section 2: Things you enjoy doing & Subjects you may enjoy */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-teal"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-brand-teal" />
                Things You Enjoy Doing
              </h3>
              <ul className="space-y-3">
                {results.grade9Report.thingsYouEnjoyDoing.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-gold"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand-gold" />
                Subjects You May Enjoy
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {results.grade9Report.subjectsYouMayEnjoy.map((item, idx) => (
                  <span key={idx} className="text-xs font-bold bg-brand-primary/10 text-brand-primary px-3.5 py-2 rounded-xl border border-brand-primary/5 flex items-center gap-1.5 shadow-2xs">
                    📚 {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Fun Career Ideas to Explore */}
          <div className="bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-10 shadow-xs print-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-brand-teal"></div>
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center gap-2">
              <Compass className="h-6 w-6 text-brand-teal" />
              Fun Career Ideas to Explore
            </h3>
            <p className="text-xs text-brand-dark/60 mb-6 leading-relaxed">
              Below are some exciting jobs to learn about! Don't worry—these are not final decisions. They are just fun paths for you to discover as you grow.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {results.grade9Report.funCareerIdeasToExplore.map((item, idx) => (
                <div key={idx} className="bg-brand-bg/50 p-6 rounded-2xl border border-brand-primary/5 relative">
                  <div className="h-2 w-2 rounded-full bg-brand-teal absolute top-6 right-6"></div>
                  <h4 className="font-display font-bold text-brand-primary text-base mb-3">
                    ✨ {item.name}
                  </h4>
                  <p className="text-xs text-brand-dark/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Skills you can start building & Projects you can build */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-primary"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-primary" />
                Skills You Can Start Building
              </h3>
              <ul className="space-y-3">
                {results.grade9Report.skillsYouCanStartBuilding.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-teal"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-brand-teal" />
                Projects You Can Build
              </h3>
              <ul className="space-y-3">
                {results.grade9Report.projectsYouCanBuild.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-[10px] shrink-0 font-bold">🔨</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Activities you should try & Clubs to join */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-gold"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Compass className="h-5 w-5 text-brand-gold" />
                Activities You Should Try
              </h3>
              <ul className="space-y-3">
                {results.grade9Report.activitiesYouShouldTry.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-[10px] shrink-0 font-bold">🚀</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-primary"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-primary" />
                Clubs to Join
              </h3>
              <ul className="space-y-3">
                {results.grade9Report.clubsToJoin.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-[10px] shrink-0 font-bold">👥</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 6: Encouraging advice */}
          <div className="bg-gradient-to-r from-brand-primary/5 via-brand-teal/5 to-brand-gold/5 rounded-3xl border-2 border-dashed border-brand-primary/20 p-8 text-center print-card relative">
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-brand-primary animate-pulse" />
              Encouraging Advice
            </h3>
            <p className="text-sm text-brand-dark/85 leading-relaxed max-w-4xl mx-auto italic font-medium">
              "{results.grade9Report.encouragingAdvice}"
            </p>
          </div>
        </div>
      )}

      {/* GRADE 12 TRANSITION & HIGHER EDUCATION REPORT */}
      {gradeLevel === 'Grade 12' && results.grade12Report && (
        <div className="space-y-10">
          {/* Section 1: Pathway Fit */}
          <div className="bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-10 shadow-xs print-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-brand-primary"></div>
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-brand-primary animate-pulse" />
              Academic Pathway & Transition Fit
            </h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              {results.grade12Report.pathwayFit}
            </p>
          </div>

          {/* Section 2: JAMB & WAEC Subject Combinations */}
          <div className="bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-10 shadow-xs print-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-brand-teal"></div>
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-brand-teal" />
              Recommended UTME / JAMB Subject Combinations
            </h3>
            <p className="text-xs text-brand-dark/65 mb-6">
              O'Level Compliance: You require at least 5 O'Level credits (WAEC/NECO) including Mathematics and English Language in not more than two sittings.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {results.grade12Report.jambSubjectCombinations.map((item, idx) => (
                <div key={idx} className="bg-brand-bg/50 p-6 rounded-2xl border border-brand-primary/5">
                  <h4 className="font-display font-bold text-brand-primary text-sm mb-2">
                     {item.careerName}
                  </h4>
                  <div className="text-[11px] font-mono font-medium text-brand-dark/75 bg-white p-3 rounded-xl border border-brand-primary/5 shadow-2xs leading-relaxed">
                    <strong>UTME:</strong> {item.subjects}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Recommended Institutions & Scholarships */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-gold"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand-gold" />
                Recommended Institutions in Nigeria
              </h3>
              <ul className="space-y-3">
                {results.grade12Report.recommendedInstitutions.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-[10px] shrink-0 font-bold">🏢</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-teal"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-teal" />
                Target Local & National Scholarships
              </h3>
              <ul className="space-y-3">
                {results.grade12Report.scholarshipsToApply.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-[10px] shrink-0 font-bold">₦</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 4: Admissions Next Steps & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-primary"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Compass className="h-5 w-5 text-brand-primary" />
                Admissions Strategic Next Steps
              </h3>
              <ul className="space-y-3">
                {results.grade12Report.admissionStrategicSteps.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-[10px] shrink-0 font-bold">{idx + 1}</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-teal"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-teal" />
                Pre-University Career Certifications
              </h3>
              <ul className="space-y-3">
                {results.grade12Report.careerCertifications.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* UNDERGRADUATE CAREER ENTRY & EMPLOYABILITY REPORT */}
      {gradeLevel === 'Undergraduate' && results.undergraduateReport && (
        <div className="space-y-10">
          {/* Section 1: Employment Readiness */}
          <div className="bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-10 shadow-xs print-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-brand-primary"></div>
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-brand-primary animate-pulse" />
              Job Market Employability Analysis
            </h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              {results.undergraduateReport.employmentReadinessAnalysis}
            </p>
          </div>

          {/* Section 2: Key Portfolio Projects */}
          <div className="bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-10 shadow-xs print-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-brand-teal"></div>
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-brand-teal" />
              High-Impact Portfolio Projects to Build
            </h3>
            <p className="text-xs text-brand-dark/65 mb-6">
              Practical demonstrations of skill are the primary currency of the modern job market. We recommend building the following public assets:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {results.undergraduateReport.keyPortfolioProjects.map((item, idx) => (
                <div key={idx} className="bg-brand-bg/50 p-6 rounded-2xl border border-brand-primary/5">
                  <h4 className="font-display font-bold text-brand-primary text-sm mb-2 flex items-center gap-2">
                    🛠 {item.name}
                  </h4>
                  <p className="text-xs text-brand-dark/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Graduate Programs & Professional Bodies */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-gold"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-brand-gold" />
                Target Graduate Trainee Schemes & Programs
              </h3>
              <ul className="space-y-3">
                {results.undergraduateReport.targetGraduatePrograms.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-[10px] shrink-0 font-bold">💼</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-primary/10 shadow-xs print-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-teal"></div>
              <h3 className="font-display font-bold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-teal" />
                Professional Bodies & Networking Hubs
              </h3>
              <ul className="space-y-3">
                {results.undergraduateReport.networkingProfessionalBodies.map((item, idx) => (
                  <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-[10px] shrink-0 font-bold">👥</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 4: Skills Gap closing strategy */}
          <div className="bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-10 shadow-xs print-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-2 w-full bg-brand-primary"></div>
            <h3 className="font-display font-bold text-xl text-brand-primary mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-brand-primary" />
              Strategic Skills Gap Closing Framework
            </h3>
            <ul className="space-y-3">
              {results.undergraduateReport.skillsGapStrategy.map((item, idx) => (
                <li key={idx} className="text-xs text-brand-dark/80 leading-relaxed flex items-start gap-2.5">
                  <span className="h-5 w-5 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Academic & Technology Pathway Disclaimer */}
      <div className="bg-brand-bg rounded-2xl border border-brand-primary/5 p-5 text-center no-print text-[10px] text-brand-dark/40">
        <HelpCircle className="h-4 w-4 text-brand-dark/30 mx-auto mb-1" />
        Technology & Academic Disclaimer: Assessment reports provide informational predictions and career suggestions based on skills profiling. Ultimate educational choices should involve qualified academic advisors and technology mentors.
      </div>

      {/* Printable Watermark */}
      {results.studentName && (
        <div className="hidden print:flex fixed inset-0 pointer-events-none select-none z-0 flex-col justify-around items-center opacity-[0.03] text-brand-primary text-4xl font-black uppercase tracking-widest rotate-[-35deg] scale-110">
          <div className="flex justify-around w-full whitespace-nowrap">
            <span>{results.studentName}</span>
            <span>{results.studentName}</span>
          </div>
          <div className="flex justify-around w-full whitespace-nowrap">
            <span>{results.studentName}</span>
            <span>{results.studentName}</span>
          </div>
          <div className="flex justify-around w-full whitespace-nowrap">
            <span>{results.studentName}</span>
            <span>{results.studentName}</span>
          </div>
          <div className="flex justify-around w-full whitespace-nowrap">
            <span>{results.studentName}</span>
            <span>{results.studentName}</span>
          </div>
          <div className="flex justify-around w-full whitespace-nowrap">
            <span>{results.studentName}</span>
            <span>{results.studentName}</span>
          </div>
        </div>
      )}

    </div>
  );
}
