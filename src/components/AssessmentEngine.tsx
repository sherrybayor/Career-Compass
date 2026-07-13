import React from 'react';
import { Play, ClipboardCheck, ArrowRight, ArrowLeft, Loader2, Save, CloudLightning } from 'lucide-react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import confetti from 'canvas-confetti';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { grade9Questions, grade12Questions, undergraduateQuestions } from '../data/questions';
import { generateLocalResults } from '../data/scoring';
import { UserProfile, GradeLevel, AssessmentQuestion, AssessmentResults } from '../types';

interface AssessmentEngineProps {
  user: UserProfile | null;
  onOpenAuth: () => void;
  onComplete: (results: AssessmentResults, grade: GradeLevel) => void;
  preselectedGrade?: GradeLevel | null;
  clearPreselectedGrade?: () => void;
}

export default function AssessmentEngine({ 
  user, 
  onOpenAuth, 
  onComplete,
  preselectedGrade,
  clearPreselectedGrade
}: AssessmentEngineProps) {
  const [selectedGrade, setSelectedGrade] = React.useState<GradeLevel | null>(null);
  const [studentName, setStudentName] = React.useState('');
  const [namePromptForGrade, setNamePromptForGrade] = React.useState<GradeLevel | null>(null);
  const [questions, setQuestions] = React.useState<AssessmentQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<{ [qId: string]: number }>({});
  const [saving, setSaving] = React.useState(false);
  const [loadingSaved, setLoadingSaved] = React.useState(false);
  const [generatingAI, setGeneratingAI] = React.useState(false);
  const [saveIndicator, setSaveIndicator] = React.useState('');

  // Handle preselected grade level from parent
  React.useEffect(() => {
    if (preselectedGrade) {
      setNamePromptForGrade(preselectedGrade);
      if (clearPreselectedGrade) {
        clearPreselectedGrade();
      }
    }
  }, [preselectedGrade]);

  const gradeTiers: { id: GradeLevel; title: string; subtitle: string; desc: string; count: number }[] = [
    {
      id: 'Grade 9',
      title: 'Junior Secondary (JSS3)',
      subtitle: 'Grade 9 Students',
      desc: 'Aligns BECE results, interests, and natural curiosities to suggest the ideal Science, Arts, or Commercial Senior Secondary departments.',
      count: 60
    },
    {
      id: 'Grade 12',
      title: 'Senior Secondary (SS3)',
      subtitle: 'Grade 12 Students',
      desc: 'Deep RIASEC & Big Five mapping to recommend matching University/Polytechnic courses, WAEC requirements, and JAMB combinations.',
      count: 90
    },
    {
      id: 'Undergraduate',
      title: 'University / Polytechnic',
      subtitle: 'Undergraduates & Graduates',
      desc: 'Focuses on transferable skills, digital literacy, and AI readiness to design corporate transitions, internships, and postgraduate specializations.',
      count: 100
    }
  ];

  // Fetch or setup selected assessment tier
  const handleSelectGrade = async (grade: GradeLevel) => {
    setSelectedGrade(grade);
    let qPool: AssessmentQuestion[] = [];
    if (grade === 'Grade 9') qPool = grade9Questions;
    else if (grade === 'Grade 12') qPool = grade12Questions;
    else qPool = undergraduateQuestions;
    setQuestions(qPool);
    setCurrentIndex(0);
    setAnswers({});

    // If user is authenticated, check for an existing in-progress test to resume!
    if (user) {
      setLoadingSaved(true);
      const docId = `test_${user.uid}_${grade.replace(/\s+/g, '_')}`;
      try {
        const docRef = doc(db, 'assessments', docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && !data.completed) {
            // Found incomplete test, restore state!
            setAnswers(data.answers || {});
            setCurrentIndex(data.currentQuestionIndex || 0);
            setSaveIndicator('Restored saved assessment progress from cloud.');
            setTimeout(() => setSaveIndicator(''), 3000);
          }
        }
      } catch (err) {
        console.warn("Could not check for saved assessment.", err);
      } finally {
        setLoadingSaved(false);
      }
    }
  };

  // Auto-save answers to Firestore when answers state changes
  React.useEffect(() => {
    if (!selectedGrade || Object.keys(answers).length === 0 || !user) return;

    const autoSave = async () => {
      setSaving(true);
      const docId = `test_${user.uid}_${selectedGrade.replace(/\s+/g, '_')}`;
      const progress = Math.round((Object.keys(answers).length / questions.length) * 100);
      try {
        const docRef = doc(db, 'assessments', docId);
        await setDoc(docRef, {
          id: docId,
          userId: user.uid,
          gradeLevel: selectedGrade,
          progress,
          currentQuestionIndex: currentIndex,
          answers,
          completed: false,
          updatedAt: new Date()
        });
        setSaveIndicator('Progress autosaved');
        setTimeout(() => setSaveIndicator(''), 2000);
      } catch (fsErr) {
        console.error("Autosave error:", fsErr);
      } finally {
        setSaving(false);
      }
    };

    // Debounce autosave slightly
    const timer = setTimeout(() => {
      autoSave();
    }, 1500);

    return () => clearTimeout(timer);
  }, [answers, currentIndex, selectedGrade, user]);

  const currentQuestion = questions[currentIndex];

  const handleSelectValue = (value: number) => {
    if (!currentQuestion) return;
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));

    // Auto-advance with subtle delay
    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const triggerCelebration = () => {
    // Premium multi-stage confetti celebration
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#0B2545', '#00A79D', '#F1941F', '#21B6A8', '#FFD700']
    });

    // Left side burst
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: ['#0B2545', '#00A79D', '#F1941F']
      });
    }, 200);

    // Right side burst
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: ['#0B2545', '#00A79D', '#F1941F']
      });
    }, 400);
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length * 0.7) {
      alert(`To ensure psychometric accuracy, please answer at least 70% of the questions. (You answered ${Object.keys(answers).length}/${questions.length})`);
      return;
    }

    setGeneratingAI(true);
    try {
      // 1. Generate deterministic local results
      const localResults = generateLocalResults(selectedGrade!, answers);
      localResults.studentName = studentName;

      // 2. Fetch augmented report using server-side Gemini 3.5 AI route
      const response = await fetch('/api/gemini/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gradeLevel: selectedGrade,
          answers,
          scores: localResults.scores,
          results: localResults
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned error status: ${response.status}`);
      }

      const aiResults = await response.json();
      if (!aiResults || aiResults.error || !aiResults.topCareers || !Array.isArray(aiResults.topCareers)) {
        throw new Error(aiResults?.error || "AI Response is malformed or empty");
      }

      aiResults.studentName = studentName;

      // 3. Save finalized report to database under /assessments if logged in
      if (user) {
        const docId = `test_${user.uid}_${selectedGrade!.replace(/\s+/g, '_')}`;
        const docRef = doc(db, 'assessments', docId);
        await setDoc(docRef, {
          id: docId,
          userId: user.uid,
          gradeLevel: selectedGrade,
          progress: 100,
          currentQuestionIndex: currentIndex,
          answers,
          scores: aiResults.scores || localResults.scores,
          results: aiResults,
          completed: true,
          updatedAt: new Date()
        });
      }

      triggerCelebration();
      onComplete(aiResults, selectedGrade!);
    } catch (err) {
      console.error("AI Report generation error:", err);
      // Fallback to deterministic local results so user is NEVER blocked!
      const localResults = generateLocalResults(selectedGrade!, answers);
      localResults.studentName = studentName;
      triggerCelebration();
      onComplete(localResults, selectedGrade!);
    } finally {
      setGeneratingAI(false);
    }
  };

  // Progress calculations
  const answeredCount = Object.keys(answers).length;
  const progressPercent = questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;

  if (generatingAI) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="relative inline-block">
          <Loader2 className="h-16 w-16 text-brand-teal animate-spin mx-auto" />
          <CloudLightning className="h-6 w-6 text-brand-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <h2 className="font-display font-bold text-2xl text-brand-primary">
          Synthesizing AI Career Profile...
        </h2>
        <p className="text-brand-dark/70 text-sm leading-relaxed max-w-sm mx-auto">
          Our cognitive engine is evaluating your interests against Nigerian JAMB combinations, calculating SWOT metrics, and formulating qualitative career matching justifications. Please hold on.
        </p>
      </div>
    );
  }

  if (namePromptForGrade) {
    const selectedTier = gradeTiers.find(t => t.id === namePromptForGrade);
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl border border-brand-primary/10 shadow-lg p-8 space-y-6 relative overflow-hidden">
          {/* Accent strip */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-primary to-brand-teal"></div>
          
          <div className="text-center">
            <span className="text-[10px] font-mono font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full uppercase tracking-wider">
              Personalize Your Profile
            </span>
            <h2 className="font-display font-bold text-2xl text-brand-primary mt-4">
              Welcome to the {selectedTier?.title || 'Assessment'}
            </h2>
            <p className="text-brand-dark/70 text-xs mt-2 leading-relaxed">
              Before we activate the diagnostic engine, please enter your full name. Your name will be used to watermark and personalize your official PDF report.
            </p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            if (studentName.trim()) {
              const grade = namePromptForGrade;
              setNamePromptForGrade(null);
              handleSelectGrade(grade);
            }
          }} className="space-y-4">
            <div>
              <label htmlFor="student-name" className="block text-[10px] font-mono font-bold text-brand-dark/50 uppercase tracking-wider mb-2">
                Student Full Name
              </label>
              <input
                id="student-name"
                type="text"
                required
                autoFocus
                placeholder="e.g. Busola Onisesi"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 bg-brand-bg/30 text-brand-dark placeholder-brand-dark/30 text-sm focus:outline-hidden focus:border-brand-teal focus:ring-1 focus:ring-brand-teal font-sans font-medium transition-all"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setNamePromptForGrade(null);
                  setSelectedGrade(null);
                }}
                className="flex-1 py-2.5 border border-brand-primary/10 text-brand-primary/70 hover:bg-brand-primary/5 rounded-xl text-xs font-semibold cursor-pointer transition-all text-center"
              >
                Go Back
              </button>
              <button
                type="submit"
                disabled={!studentName.trim()}
                className="flex-1 py-2.5 bg-brand-primary hover:bg-brand-primary/95 disabled:bg-brand-primary/30 disabled:cursor-not-allowed text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-brand-primary/10 transition-all"
              >
                <Play className="h-4 w-4" />
                Start Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {!selectedGrade ? (
        // SELECT GRADE STEP
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full uppercase">
              ASSESSMENT CENTER
            </span>
            <h1 className="font-display font-bold text-3xl text-brand-primary mt-3">
              Select Your Assessment Portal
            </h1>
            <p className="text-brand-dark/70 text-sm mt-2">
              Our assessments are precision-engineered for different stages of the Nigerian education and professional landscape. Choose the portal that matches your tier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gradeTiers.map(tier => (
              <div
                key={tier.id}
                className="bg-white rounded-2xl border border-brand-primary/10 shadow-xs hover:shadow-md p-6 flex flex-col justify-between hover:border-brand-teal/20 transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold bg-brand-teal/10 text-brand-teal px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {tier.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-xl text-brand-primary mt-3 leading-tight">
                    {tier.title}
                  </h3>
                  <p className="text-brand-dark/70 text-xs mt-3 leading-relaxed">
                    {tier.desc}
                  </p>
                  <p className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider mt-4">
                    📋 {tier.count} Psychometric Items
                  </p>
                </div>

                <button
                  onClick={() => setNamePromptForGrade(tier.id)}
                  className="w-full mt-6 py-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-brand-primary/10"
                >
                  <Play className="h-4 w-4" />
                  Begin Assessment
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // IN-PROGRESS QUESTIONNAIRE
        <div className="bg-white rounded-3xl border border-brand-primary/10 shadow-sm p-6 sm:p-10">
          
          {/* Header Progress Indicators */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-primary/5 pb-6 mb-8">
            <div>
              <span className="inline-block text-[10px] font-bold bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full uppercase tracking-wider">
                {selectedGrade} Portal
              </span>
              <h2 className="font-display font-bold text-lg text-brand-primary mt-1.5">
                Question {currentIndex + 1} of {questions.length}
              </h2>
            </div>

            <div className="text-right sm:max-w-xs w-full">
              <div className="flex justify-between items-center text-[10px] font-mono font-bold text-brand-dark/50 mb-1">
                <span>COMPLETION PROGRESS</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="h-2 w-full bg-brand-primary/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-teal rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <span className="text-[9px] font-mono text-brand-dark/40 block mt-1">
                {answeredCount} of {questions.length} items answered
              </span>
            </div>
          </div>

          {/* Save status notification */}
          {saveIndicator && (
            <div className="mb-4 text-[10px] font-mono font-semibold text-brand-teal bg-brand-teal/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
              <Save className="h-3 w-3" />
              {saveIndicator}
            </div>
          )}

          {/* The Question Text Card */}
          <div className="bg-brand-bg/40 border border-brand-primary/5 rounded-2xl p-6 sm:p-10 mb-8 text-center min-h-[160px] flex flex-col justify-center">
            {currentQuestion ? (
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-widest block mb-2">
                  Category: {currentQuestion.category} {currentQuestion.subCategory ? `— ${currentQuestion.subCategory}` : ''}
                </span>
                <p className="font-display font-semibold text-lg sm:text-xl text-brand-primary leading-snug">
                  "{currentQuestion.text}"
                </p>
              </div>
            ) : (
              <p className="text-brand-dark/50 text-sm">Question loading...</p>
            )}
          </div>

          {/* Answering Scale or Custom Options */}
          <div className="space-y-4 mb-10">
            {currentQuestion && currentQuestion.options && currentQuestion.options.length > 0 ? (
              <div className="space-y-4 max-w-2xl mx-auto">
                <span className="text-[10px] font-mono font-bold text-brand-dark/40 uppercase block text-center mb-2">
                  Select the Option That Best Applies to You
                </span>
                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((opt, idx) => {
                    const optVal = Number(opt.value);
                    const isSelected = answers[currentQuestion.id] === optVal;
                    const letter = String.fromCharCode(65 + idx); // A, B, C, D...
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectValue(optVal)}
                        id={`option-${currentQuestion.id}-${idx}`}
                        className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                          isSelected
                            ? 'bg-brand-primary/5 border-brand-primary ring-1 ring-brand-primary text-brand-primary shadow-xs'
                            : 'bg-white hover:bg-brand-primary/5 hover:border-brand-primary/30 border-brand-primary/10 text-brand-dark/80'
                        }`}
                      >
                        <span className={`h-6 w-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-brand-primary text-white border-brand-primary'
                            : 'bg-brand-primary/5 text-brand-primary border-brand-primary/15'
                        }`}>
                          {letter}
                        </span>
                        <span className="text-xs sm:text-sm font-medium leading-relaxed">
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              // Default Likert Scale (1-5)
              <>
                <span className="text-[10px] font-mono font-bold text-brand-dark/40 uppercase block text-center mb-2">
                  Select Your Preference
                </span>

                <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-2xl mx-auto">
                  {[
                    { value: 1, label: 'Strongly Disagree', color: 'hover:bg-red-50 hover:text-red-600 border-red-200' },
                    { value: 2, label: 'Disagree', color: 'hover:bg-orange-50 hover:text-orange-500 border-orange-100' },
                    { value: 3, label: 'Neutral', color: 'hover:bg-gray-100 hover:text-gray-600 border-gray-200' },
                    { value: 4, label: 'Agree', color: 'hover:bg-teal-50 hover:text-brand-teal border-teal-100' },
                    { value: 5, label: 'Strongly Agree', color: 'hover:bg-emerald-50 hover:text-emerald-600 border-emerald-200' }
                  ].map(opt => {
                    const isSelected = answers[currentQuestion?.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelectValue(opt.value)}
                        id={`likert-${currentQuestion?.id}-${opt.value}`}
                        className={`flex flex-col items-center justify-between p-3 sm:p-4 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-brand-primary border-brand-primary text-white shadow-md'
                            : `bg-white ${opt.color} text-brand-dark/70`
                        }`}
                      >
                        <span className="font-display font-bold text-base sm:text-lg block">{opt.value}</span>
                        <span className={`text-[9px] sm:text-[10px] font-semibold mt-1 leading-tight ${isSelected ? 'text-white' : 'text-brand-dark/50'}`}>
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-brand-primary/5 pt-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-brand-primary/5 hover:bg-brand-primary/10 rounded-xl text-xs font-semibold text-brand-primary flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 bg-brand-teal hover:bg-brand-teal/95 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md shadow-brand-teal/10"
              >
                <ClipboardCheck className="h-4 w-4" />
                Submit Assessment
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-brand-primary/5 hover:bg-brand-primary/10 rounded-xl text-xs font-semibold text-brand-primary flex items-center gap-1.5 cursor-pointer"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setSelectedGrade(null)}
            className="mt-6 text-[10px] font-semibold text-brand-dark/40 hover:text-brand-primary block mx-auto uppercase cursor-pointer"
          >
            ← Exit Assessment
          </button>

        </div>
      )}

    </div>
  );
}
