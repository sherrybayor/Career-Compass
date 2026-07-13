import React from 'react';
import { Compass, GraduationCap, ArrowRight, CheckCircle2, BookOpen, Shield, HelpCircle, Star, Sparkles, MessageSquare, ExternalLink, Globe, Instagram, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import CareersDatabase from './components/CareersDatabase';
import AssessmentEngine from './components/AssessmentEngine';
import ResultsDisplay from './components/ResultsDisplay';
import ContactSection from './components/ContactSection';
import AdminDashboard from './components/AdminDashboard';
import BrandLogo from './components/BrandLogo';
import { UserProfile, GradeLevel, AssessmentResults } from './types';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<string>('home');
  const [assessmentResults, setAssessmentResults] = React.useState<AssessmentResults | null>(null);
  const [completedGrade, setCompletedGrade] = React.useState<GradeLevel | null>(null);
  const [preselectedGrade, setPreselectedGrade] = React.useState<GradeLevel | null>(null);

  const handleCompleteAssessment = (results: AssessmentResults, grade: GradeLevel) => {
    setAssessmentResults(results);
    setCompletedGrade(grade);
  };

  const handleResetAssessment = () => {
    setAssessmentResults(null);
    setCompletedGrade(null);
    setPreselectedGrade(null);
  };

  // Rendering content dynamically based on selected navigation tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'careers':
        return <CareersDatabase />;
      case 'test':
        if (assessmentResults && completedGrade) {
          return (
            <ResultsDisplay
              results={assessmentResults}
              gradeLevel={completedGrade}
              onReset={handleResetAssessment}
            />
          );
        }
        return (
          <AssessmentEngine
            user={null}
            onOpenAuth={() => {}}
            onComplete={handleCompleteAssessment}
            preselectedGrade={preselectedGrade}
            clearPreselectedGrade={() => setPreselectedGrade(null)}
          />
        );
      case 'contact':
        return <ContactSection />;
      case 'dashboard':
        return <AdminDashboard />;
      case 'home':
      default:
        return renderHomeLanding();
    }
  };

  // Render complete Landing / Homepage
  const renderHomeLanding = () => (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO & PORTALS SECTION */}
      <section className="pt-10 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          <div className="lg:col-span-12">
            <div className="text-brand-teal text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] mb-4">
              B BRIGHT TECH HUB PRESENTS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-[-0.04em] text-brand-primary uppercase">
              DISCOVER THE<br/>
              <span className="text-brand-gold">CAREER</span> YOU'RE<br/>
              BUILT FOR.
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-xl text-brand-dark/80 mt-6 font-medium leading-relaxed">
              Science-backed psychometric assessments aligned with Nigerian educational pathways: JSS3, SS3, and beyond. Designed with AI-powered diagnostic depth.
            </p>
          </div>
        </div>

        {/* 2. PORTAL SELECTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div 
            onClick={() => {
              setPreselectedGrade('Grade 9');
              setActiveTab('test');
            }}
            className="bg-brand-primary text-white p-8 rounded-[24px] flex flex-col justify-between group cursor-pointer transition-all hover:-translate-y-1 shadow-md shadow-brand-primary/5 hover:shadow-lg"
          >
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/60 mb-8">01 / JSS 3 Portal</div>
              <h2 className="text-3xl font-black tracking-tight leading-none mb-4 uppercase">GRADE 9<br/>STUDENTS</h2>
              <p className="text-xs text-white/80 leading-relaxed">Find your senior secondary school department track (Science, Commercial, Arts) after JSS3.</p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Enter Portal</span>
              <div className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-primary transition-all">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => {
              setPreselectedGrade('Grade 12');
              setActiveTab('test');
            }}
            className="bg-brand-gold text-white p-8 rounded-[24px] flex flex-col justify-between group cursor-pointer transition-all hover:-translate-y-1 shadow-md shadow-brand-gold/5 hover:shadow-lg"
          >
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/60 mb-8">02 / SS 3 Portal</div>
              <h2 className="text-3xl font-black tracking-tight leading-none mb-4 uppercase">GRADE 12<br/>STUDENTS</h2>
              <p className="text-xs text-white/80 leading-relaxed">Discover your ideal University or Polytechnic course, WAEC prerequisite subjects, and JAMB combinations.</p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Enter Portal</span>
              <div className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-gold transition-all">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => {
              setPreselectedGrade('Undergraduate');
              setActiveTab('test');
            }}
            className="bg-brand-teal text-white p-8 rounded-[24px] flex flex-col justify-between group cursor-pointer transition-all hover:-translate-y-1 shadow-md shadow-brand-teal/5 hover:shadow-lg"
          >
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/60 mb-8">03 / Tertiary Portal</div>
              <h2 className="text-3xl font-black tracking-tight leading-none mb-4 uppercase">UNDERGRADUATES<br/>& GRADUATES</h2>
              <p className="text-xs text-white/80 leading-relaxed">Map transferable skills, digital literacy, and AI readiness to corporate careers or postgraduate pathways.</p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Enter Portal</span>
              <div className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-teal transition-all">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CAREERCOMPASS AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold tracking-[0.25em] text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-md">
            THE DIFFERENCE
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-brand-primary uppercase mt-4">
            Why Career Compass?
          </h2>
          <p className="text-brand-dark/70 text-xs md:text-sm mt-2">
            Most career matching platforms are simple lookup directories. Career Compass goes deeper.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Multidimensional Testing', desc: 'We assess RIASEC interests, Big Five personalities, cognitive aptitudes, and technology readiness simultaneously.' },
            { title: 'Nigerian Curriculum Sync', desc: 'Directly recommends university/polytechnic courses, WAEC subject prerequisites, and specific JAMB scoring alignments.' },
            { title: 'Zero Demographic Bias', desc: 'Rigorous algorithmic mitigation ensures that gender, religion, or background never influences recommendations.' },
            { title: 'Actionable Career Plans', desc: 'Provides clear checklists: recommended professional certifications, local internships, student competitions, and books.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[20px] border border-brand-primary/10 shadow-sm hover:shadow-md transition-all">
              <div className="h-7 w-7 bg-brand-teal/10 text-brand-teal rounded-lg flex items-center justify-center font-black text-xs mb-4">
                ✓
              </div>
              <h3 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-2">{item.title}</h3>
              <p className="text-brand-dark/70 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="bg-brand-primary/5 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold tracking-[0.25em] text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-md">
              GUIDANCE ENGINE
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-brand-primary uppercase mt-4">
              How the Diagnostic Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              { num: '01', title: 'Choose Your Portal', desc: 'Select JSS3, SS3, or Undergraduate tiers. Each features a custom-designed questionnaire reflecting your level.' },
              { num: '02', title: 'Answer Curricular Items', desc: 'Respond to Likert-scale questions regarding hobbies, subjects, teamwork, leadership preferences, and coding.' },
              { num: '03', title: 'Unveil AI-Powered Insights', desc: 'Receive your dynamic matches, WAEC combinations, SWOT, online resources, and downloadable PDF reports.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[20px] border border-brand-primary/10 shadow-sm relative">
                <span className="font-display font-black text-4xl text-brand-primary/10 absolute top-4 right-6">
                  {step.num}
                </span>
                <h3 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-2">{step.title}</h3>
                <p className="text-brand-dark/70 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY ASSESSMENT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold tracking-[0.25em] text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-md">
            COMPREHENSIVE PROFILING
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-brand-primary uppercase mt-4">
            Assessment Categories We Evaluate
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'RIASEC Interest Inventory', desc: 'Realistic, Investigative, Artistic, Social, Enterprising, and Conventional archetypes.' },
            { label: 'Big Five Personality Mapping', desc: 'Evaluating Openness, Conscientiousness, Extraversion, Agreeableness, and Emotional Stability.' },
            { label: 'Aptitude & Reasoning Tests', desc: 'Verbal reasoning, numerical patterns, logical debugging, and spatial rotation indexes.' },
            { label: 'Technology Readiness Indicators', desc: 'Assessing foundational digital literacy, coding curiosities, and AI operational capabilities.' },
            { label: 'Academic Curriculum Tracking', desc: 'Mapping school department preferences, core subjects grades, and tertiary options.' },
            { label: 'Professional Career Values', desc: 'Determining motivation levels, workplace safety values, risk tolerance, and entrepreneurship mindsets.' }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[20px] border border-brand-primary/10 flex gap-4">
              <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-1">{cat.label}</h4>
                <p className="text-brand-dark/60 text-xs leading-normal">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold tracking-[0.25em] text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-md">
            FAQ
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-brand-primary uppercase mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { q: 'How long does the assessment take to complete?', a: 'Depending on your portal tier, it takes between 15 to 30 minutes. Grade 9 has 60 questions, Grade 12 has 90, and Undergraduate has 100.' },
            { q: 'Can I save my progress and resume the test later?', a: 'Yes! Simply sign in with an account before or during the assessment. Our secure database automatically saves progress on every answer so you can resume on any device.' },
            { q: 'What curriculum standards do your recommendations follow?', a: 'We follow the Nigerian secondary school guidelines set by NERDC, mapped directly with WAEC/NECO prerequisite subject combinations and Joint Admissions and Matriculation Board (JAMB) entry criteria.' },
            { q: 'Is my personal data secure under your platform?', a: 'Absolutely. We strictly adhere to the Nigerian Data Protection Act (NDPA) principles. Your profile, responses, and score results are encrypted and accessible only to you and designated administrators and technology advisors.' }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[20px] border border-brand-primary/10 shadow-sm">
              <h4 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-2">Q: {faq.q}</h4>
              <p className="text-brand-dark/70 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      
      {/* Platform Responsive Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Core Dynamic Content Area */}
      <main className="flex-1">
        {renderTabContent()}
      </main>

      {/* 6. PLATFORM FOOTER */}
      <footer className="bg-white border-t border-brand-primary/10 py-12 text-xs text-brand-dark/70 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
            
            {/* Main brand and description */}
            <div className="md:col-span-7 space-y-4 text-left">
              <BrandLogo variant="horizontal" size="sm" />
              <p className="max-w-2xl text-brand-dark/70 leading-relaxed text-[11px] font-medium">
                B Bright Tech Hub empowers children and teenagers with future-ready skills through hands-on coding, robotics, artificial intelligence, STEM education, and makerspace experiences. We inspire curiosity, creativity, and innovation in a fun, supportive learning environment, helping young learners become confident problem-solvers, creators, and leaders ready to shape the future.
              </p>
            </div>

            {/* Quick Contact & Links */}
            <div className="md:col-span-5 space-y-4 md:text-right text-left">
              <h4 className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-widest">Connect with Us</h4>
              <ul className="space-y-2.5 text-[11px] font-semibold text-brand-primary flex flex-col md:items-end">
                <li>
                  <a 
                    href="https://www.bbrighttech.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-brand-teal transition-colors"
                  >
                    <Globe className="h-4 w-4 text-brand-teal" />
                    <span>www.bbrighttech.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/bbrighttechhub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-brand-teal transition-colors"
                  >
                    <Instagram className="h-4 w-4 text-brand-teal" />
                    <span>@bbrighttechhub</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/2348054264981" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-brand-teal transition-colors"
                  >
                    <Phone className="h-4 w-4 text-brand-teal" />
                    <span>08054264981</span>
                  </a>
                </li>
              </ul>
            </div>
            
          </div>

          <hr className="border-brand-primary/10 my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-brand-dark/40 uppercase tracking-wider">
            <p>
              © {new Date().getFullYear()} <a href="https://www.bbrighttech.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors underline decoration-dotted">B Bright Tech Hub</a>. All rights reserved.
            </p>
            <p>
              Pioneering guidance powered by Career Compass
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
