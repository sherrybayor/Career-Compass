import React from 'react';
import { Target, ShieldCheck, HeartHandshake, Eye, Users, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-extrabold tracking-[0.25em] text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-md">
          OUR MISSION
        </span>
        <h1 className="font-display font-black text-3xl md:text-5xl text-brand-primary mt-4 tracking-tight uppercase leading-none">
          Pioneering Human Potential Through Science and Technology
        </h1>
        <p className="text-brand-dark/70 mt-6 leading-relaxed text-sm md:text-base font-medium">
          At B Bright Tech Hub, we believe every individual possesses a unique constellation of natural talents. 
          Career Compass was designed to help JSS3/SS3 students and undergraduates map their educational pathways objectively.
        </p>
      </div>

      {/* Grid: 3 pillars */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-8 rounded-[24px] border border-brand-primary/10 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6">
            <Target className="h-6 w-6 text-brand-primary" />
          </div>
          <h3 className="font-display font-black text-brand-primary text-sm uppercase tracking-wider mb-3">Our Mission</h3>
          <p className="text-xs text-brand-dark/70 leading-relaxed">
            Democratizing world-class career guidance for Nigerian youth. We map psychological profiling with local educational requirements (WAEC/JAMB) so students build real, stable futures.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[24px] border border-brand-primary/10 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="h-12 w-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-6">
            <HeartHandshake className="h-6 w-6 text-brand-teal" />
          </div>
          <h3 className="font-display font-black text-brand-primary text-sm uppercase tracking-wider mb-3">Holistic Development</h3>
          <p className="text-xs text-brand-dark/70 leading-relaxed">
            A career is not just a high salary. We evaluate learning styles, cognitive aptitudes, social values, and technology readiness to matching sustainable, deeply fulfilling careers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[24px] border border-brand-primary/10 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="h-12 w-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6">
            <ShieldCheck className="h-6 w-6 text-brand-gold" />
          </div>
          <h3 className="font-display font-black text-brand-primary text-sm uppercase tracking-wider mb-3">Rigor & Precision</h3>
          <p className="text-xs text-brand-dark/70 leading-relaxed">
            Combining deterministic psychometrics (such as John Holland's RIASEC framework and the Big Five) with state-of-the-art server-side Gemini 3.5 AI analysis.
          </p>
        </div>
      </div>

      {/* Section: How it works */}
      <div className="bg-brand-primary/5 rounded-[32px] p-8 sm:p-12 mb-16 border border-brand-primary/10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-extrabold tracking-[0.25em] text-brand-primary uppercase">
              THE METHODOLOGY
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-primary mt-3 uppercase">
              How the Career Assessment Works
            </h2>
            <p className="text-brand-dark/70 text-xs mt-4 leading-relaxed">
              Traditional matching engines only ask "what are your favorite subjects?". Career Compass employs a comprehensive multidimensional methodology:
            </p>

            <ul className="space-y-4 mt-6">
              {[
                { title: 'Cognitive Aptitude Evaluation', desc: 'Tests verbal, numerical, and spatial reasoning based on your age-grade metrics.' },
                { title: 'RIASEC Interest Inventory', desc: 'Identifies Realistic, Investigative, Artistic, Social, Enterprising, and Conventional traits.' },
                { title: 'Technology & Future Readiness', desc: 'Assesses digital literacy, AI curiosity, and automation adaptability.' },
                { title: 'Academic Pathway Synthesis', desc: 'Aligns results with WAEC subjects, JAMB combinations, and universities offering specific courses.' }
              ].map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="h-6 w-6 rounded-lg bg-brand-teal text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider">{step.title}</h4>
                    <p className="text-xs text-brand-dark/60 mt-0.5">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-[24px] border border-brand-primary/10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-brand-teal/10 rounded-bl-full z-0"></div>
            <h3 className="font-display font-black text-brand-primary text-sm uppercase tracking-wider mb-4 relative z-10">Our Guiding Principle</h3>
            <blockquote className="border-l-4 border-brand-gold pl-4 text-brand-dark/70 italic text-xs my-4">
              "We must guide our children to the careers they are built for, not the ones we wish they had. Nigeria's growth depends on matching authentic human talent with industrial and technological necessity."
            </blockquote>
            <p className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider mt-4">
              — Dr. Busola Onisesi, Founder
            </p>
          </div>
        </div>
      </div>

      {/* Section: AI Ethics & Bias Mitigation */}
      <div className="bg-white rounded-[32px] border border-brand-primary/10 p-8 sm:p-12 shadow-sm mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-brand-teal mb-4">
            <ShieldCheck className="h-8 w-8" />
            <h3 className="font-display font-black text-xl uppercase tracking-wider">Ethical AI & Bias Mitigation</h3>
          </div>
          <p className="text-brand-dark/80 text-xs leading-relaxed">
            Algorithmic guidance systems carry high social responsibility. Career Compass is engineered following strict ethical standards:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-brand-bg p-5 rounded-[20px] border border-brand-primary/10">
              <h4 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-2">Zero Demographic Profiling</h4>
              <p className="text-xs text-brand-dark/60 leading-relaxed">
                Our model strictly prohibits recommendations influenced by gender, religion, tribal affiliation, ethnicity, or socioeconomic background. We evaluate aptitude and interests alone.
              </p>
            </div>
            <div className="bg-brand-bg p-5 rounded-[20px] border border-brand-primary/10">
              <h4 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-2">Confidence Gates</h4>
              <p className="text-xs text-brand-dark/60 leading-relaxed">
                If the model's confidence score falls below 70%, we explicitly prompt with additional clarifying diagnostic items, preventing premature or faulty matches.
              </p>
            </div>
            <div className="bg-brand-bg p-5 rounded-[20px] border border-brand-primary/10">
              <h4 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-2">NDPA Compliance</h4>
              <p className="text-xs text-brand-dark/60 leading-relaxed">
                We strictly adhere to the Nigerian Data Protection Act (NDPA) principles, encrypting student results, profiles, and responses at rest.
              </p>
            </div>
            <div className="bg-brand-bg p-5 rounded-[20px] border border-brand-primary/10">
              <h4 className="font-display font-black text-brand-primary text-xs uppercase tracking-wider mb-2">Transparency & Explainability</h4>
              <p className="text-xs text-brand-dark/60 leading-relaxed">
                We never use black-box matching. We supply complete qualitative justifications for every single career match recommendation, citing WAEC and JAMB criteria.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
