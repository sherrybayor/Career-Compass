import React from 'react';
import { Search, MapPin, Award, BookOpen, Clock, AlertTriangle, ChevronRight, Play, Book, GraduationCap, X } from 'lucide-react';
import { careersDb } from '../data/careers';
import { CareerProfile } from '../types';

export default function CareersDatabase() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedSector, setSelectedSector] = React.useState('All');
  const [selectedDemand, setSelectedDemand] = React.useState('All');
  const [selectedAiRisk, setSelectedAiRisk] = React.useState('All');
  const [activeCareer, setActiveCareer] = React.useState<CareerProfile | null>(null);

  // Sectors list
  const sectors = ['All', ...new Set(careersDb.map(c => c.sector))];

  // Filter career list
  const filteredCareers = careersDb.filter(career => {
    const matchesSearch = career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          career.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSector = selectedSector === 'All' || career.sector === selectedSector;
    const matchesDemand = selectedDemand === 'All' || career.futureDemand === selectedDemand;
    const matchesAiRisk = selectedAiRisk === 'All' || career.aiRisk === selectedAiRisk;

    return matchesSearch && matchesSector && matchesDemand && matchesAiRisk;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <span className="text-xs font-extrabold tracking-[0.25em] text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-md">
          CAREERS PORTAL
        </span>
        <h1 className="font-display font-black text-3xl md:text-4xl text-brand-primary mt-4 tracking-tight uppercase leading-none">
          Explore Nigeria's High-Demand Future Careers
        </h1>
        <p className="text-brand-dark/70 mt-3 text-xs md:text-sm max-w-2xl font-medium">
          Search and filter through complete, realistic educational and professional pathways. Click on any career to inspect prerequisite WAEC subjects, JAMB scores, and academic institutions.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-6 rounded-2xl border border-brand-primary/10 shadow-xs mb-10 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-dark/40" />
          <input
            type="text"
            placeholder="Search by career title, skills, courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-primary/15 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-brand-bg/30 text-sm font-sans"
          />
        </div>

        {/* Sector Filter */}
        <div className="w-full md:w-48">
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-brand-primary/15 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-brand-bg/30 text-xs font-semibold text-brand-dark"
          >
            <option value="All">All Sectors</option>
            {sectors.filter(s => s !== 'All').map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Demand Filter */}
        <div className="w-full md:w-48">
          <select
            value={selectedDemand}
            onChange={(e) => setSelectedDemand(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-brand-primary/15 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-brand-bg/30 text-xs font-semibold text-brand-dark"
          >
            <option value="All">All Future Demand</option>
            <option value="High">High Demand Only</option>
            <option value="Medium">Medium Demand Only</option>
          </select>
        </div>

        {/* AI Risk Filter */}
        <div className="w-full md:w-48">
          <select
            value={selectedAiRisk}
            onChange={(e) => setSelectedAiRisk(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-brand-primary/15 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-brand-bg/30 text-xs font-semibold text-brand-dark"
          >
            <option value="All">All AI Risk Tiers</option>
            <option value="Low">Low AI Risk</option>
            <option value="Medium">Medium AI Risk</option>
            <option value="High">High AI Risk</option>
          </select>
        </div>
      </div>

      {/* Grid: Careers Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCareers.map((career) => (
          <div
            key={career.id}
            className="bg-white rounded-2xl border border-brand-primary/5 shadow-xs hover:shadow-md hover:border-brand-teal/20 transition-all p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold font-mono bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {career.sector}
                </span>
                <span className={`text-[10px] font-bold font-mono px-2.5 py-1 rounded-full ${
                  career.futureDemand === 'High' ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-gold/10 text-brand-gold'
                }`}>
                  {career.futureDemand} Demand
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-brand-primary leading-tight mb-2">
                {career.name}
              </h3>

              <p className="text-brand-dark/70 text-xs line-clamp-3 mb-6">
                {career.description}
              </p>

              <div className="space-y-2 border-t border-brand-primary/5 pt-4 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-brand-dark/50">Salary (Nigeria):</span>
                  <span className="font-semibold text-brand-dark">{career.salaryNigeria.split('-')[0]}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-brand-dark/50">AI Risk:</span>
                  <span className={`font-semibold ${
                    career.aiRisk === 'Low' ? 'text-brand-teal' : career.aiRisk === 'Medium' ? 'text-brand-gold' : 'text-red-500'
                  }`}>{career.aiRisk} Risk</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveCareer(career)}
              className="w-full py-2 bg-brand-primary/5 hover:bg-brand-primary hover:text-white rounded-xl text-xs font-semibold text-brand-primary transition-colors cursor-pointer text-center block"
            >
              View Full Pathway Details
            </button>
          </div>
        ))}

        {filteredCareers.length === 0 && (
          <div className="col-span-full bg-white p-12 text-center rounded-2xl border border-brand-primary/10">
            <p className="text-brand-dark/50 font-medium">No careers matched your current search filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedSector('All'); setSelectedDemand('All'); setSelectedAiRisk('All'); }}
              className="mt-4 px-4 py-2 bg-brand-primary text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Expanded Modal */}
      {activeCareer && (
        <div className="fixed inset-0 bg-brand-dark/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-brand-primary/10 animate-scale-up">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-brand-primary/10 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeCareer.sector}
                </span>
                <span className="text-xs font-mono font-bold bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeCareer.futureDemand} Demand
                </span>
              </div>
              <button
                onClick={() => setActiveCareer(null)}
                className="p-1.5 rounded-full hover:bg-brand-primary/5 text-brand-dark/60"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Title & Overview */}
              <div>
                <h2 className="font-display font-bold text-3xl text-brand-primary leading-tight mb-3">
                  {activeCareer.name}
                </h2>
                <p className="text-brand-dark/80 text-sm leading-relaxed">
                  {activeCareer.description}
                </p>
              </div>

              {/* Bento Grid: Career Metas */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-primary/5">
                  <span className="text-[10px] font-bold text-brand-dark/40 block uppercase tracking-widest mb-1">
                    Salary in Nigeria
                  </span>
                  <p className="font-display font-bold text-brand-primary text-lg">
                    {activeCareer.salaryNigeria}
                  </p>
                  <span className="text-[10px] text-brand-dark/50 block mt-1">Starting to experienced range</span>
                </div>

                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-primary/5">
                  <span className="text-[10px] font-bold text-brand-dark/40 block uppercase tracking-widest mb-1">
                    Global Salary Range
                  </span>
                  <p className="font-display font-bold text-brand-primary text-lg">
                    {activeCareer.salaryGlobal}
                  </p>
                  <span className="text-[10px] text-brand-dark/50 block mt-1">Annual USD estimates</span>
                </div>

                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-primary/5">
                  <span className="text-[10px] font-bold text-brand-dark/40 block uppercase tracking-widest mb-1">
                    Risk Assessments
                  </span>
                  <div className="flex gap-4 mt-1">
                    <div>
                      <span className="text-[9px] text-brand-dark/50 block">AI Disruption</span>
                      <span className={`font-mono text-xs font-bold uppercase ${
                        activeCareer.aiRisk === 'Low' ? 'text-brand-teal' : 'text-brand-gold'
                      }`}>{activeCareer.aiRisk} Risk</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-brand-dark/50 block">Automation</span>
                      <span className={`font-mono text-xs font-bold uppercase ${
                        activeCareer.automationRisk === 'Low' ? 'text-brand-teal' : 'text-brand-gold'
                      }`}>{activeCareer.automationRisk} Risk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Educational Requirements (Nigeria Specific) */}
              <div className="bg-brand-primary/5 rounded-2xl p-6 border border-brand-primary/10">
                <div className="flex items-center gap-2 text-brand-primary mb-4">
                  <GraduationCap className="h-6 w-6 text-brand-teal" />
                  <h3 className="font-display font-bold text-lg">Nigerian Academic Prerequisites</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* WAEC subjects */}
                  <div className="bg-white p-4 rounded-xl border border-brand-primary/10">
                    <h4 className="text-xs font-bold font-mono text-brand-gold uppercase tracking-wider mb-2">
                      Required WAEC/NECO Subjects
                    </h4>
                    <ul className="space-y-1.5">
                      {activeCareer.requiredSubjects.waec.map((subject, sIdx) => (
                        <li key={sIdx} className="text-xs text-brand-dark/80 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold"></span>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* JAMB combinations */}
                  <div className="bg-white p-4 rounded-xl border border-brand-primary/10">
                    <h4 className="text-xs font-bold font-mono text-brand-teal uppercase tracking-wider mb-2">
                      JAMB Subject Combination
                    </h4>
                    <ul className="space-y-1.5">
                      {activeCareer.requiredSubjects.jamb.map((subject, sIdx) => (
                        <li key={sIdx} className="text-xs text-brand-dark/80 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal"></span>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tertiary Academic Courses & Certifications */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-brand-primary/10 rounded-2xl p-5 shadow-xs">
                  <h4 className="font-display font-semibold text-brand-primary text-sm mb-3 border-b border-brand-primary/5 pb-2">
                    University Courses
                  </h4>
                  <ul className="space-y-2">
                    {activeCareer.universityCourses.map((course, idx) => (
                      <li key={idx} className="text-xs text-brand-dark/70 leading-normal">
                        • {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-brand-primary/10 rounded-2xl p-5 shadow-xs">
                  <h4 className="font-display font-semibold text-brand-primary text-sm mb-3 border-b border-brand-primary/5 pb-2">
                    Polytechnic Options
                  </h4>
                  <ul className="space-y-2">
                    {activeCareer.polytechnicCourses.map((course, idx) => (
                      <li key={idx} className="text-xs text-brand-dark/70 leading-normal">
                        • {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-brand-primary/10 rounded-2xl p-5 shadow-xs">
                  <h4 className="font-display font-semibold text-brand-primary text-sm mb-3 border-b border-brand-primary/5 pb-2">
                    Professional Certs
                  </h4>
                  <ul className="space-y-2">
                    {activeCareer.professionalCertifications.map((cert, idx) => (
                      <li key={idx} className="text-xs text-brand-dark/70 leading-normal">
                        • {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Universities & Day in the Life */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Universities */}
                <div className="bg-white border border-brand-primary/10 rounded-2xl p-5 shadow-xs">
                  <h4 className="font-display font-semibold text-brand-primary text-sm mb-3 border-b border-brand-primary/5 pb-2 flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-brand-teal" />
                    Top Offering Universities in Nigeria
                  </h4>
                  <ul className="space-y-1.5">
                    {activeCareer.universitiesOffering.map((uni, idx) => (
                      <li key={idx} className="text-xs text-brand-dark/80 font-medium">
                        🏢 {uni}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Day in the Life */}
                <div className="bg-white border border-brand-primary/10 rounded-2xl p-5 shadow-xs">
                  <h4 className="font-display font-semibold text-brand-primary text-sm mb-3 border-b border-brand-primary/5 pb-2 flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-brand-gold" />
                    Day in the Life
                  </h4>
                  <p className="text-xs text-brand-dark/70 leading-relaxed">
                    {activeCareer.dayInTheLife}
                  </p>
                </div>
              </div>

              {/* Study Materials */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Books */}
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-primary/5">
                  <h4 className="font-display font-semibold text-brand-primary text-sm mb-3 flex items-center gap-1.5">
                    <Book className="h-4 w-4 text-brand-teal" />
                    Recommended Reading
                  </h4>
                  <ul className="space-y-2">
                    {activeCareer.recommendedBooks.map((book, idx) => (
                      <li key={idx} className="text-xs text-brand-dark/80 italic font-medium">
                        " {book} "
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Youtube Channels */}
                <div className="bg-brand-bg p-5 rounded-2xl border border-brand-primary/5">
                  <h4 className="font-display font-semibold text-brand-primary text-sm mb-3 flex items-center gap-1.5">
                    <Play className="h-4 w-4 text-brand-gold" />
                    Recommended YouTube Channels
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCareer.recommendedYouTubeChannels.map((channel, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-white border border-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full">
                        📺 {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
