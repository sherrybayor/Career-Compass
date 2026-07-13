import React from 'react';
import { Users, TrendingUp, Cpu, Award, Download, RefreshCw, Layers, ShieldAlert, BarChart3 } from 'lucide-react';
import { UserProfile, AssessmentRecord } from '../types';

export default function AdminDashboard() {
  const [activeLogTab, setActiveLogTab] = React.useState<'users' | 'ai_logs'>('users');
  const [successToast, setSuccessToast] = React.useState('');

  const stats = [
    { label: 'Total Assessments', value: '1,420', change: '+12% this week', icon: Users, color: 'text-brand-primary bg-brand-primary/10' },
    { label: 'Popular Path', value: 'Software / Data', change: '42% select Tech', icon: TrendingUp, color: 'text-brand-teal bg-brand-teal/10' },
    { label: 'Avg Readiness Score', value: '84.5%', change: 'Excellent competency', icon: Award, color: 'text-brand-gold bg-brand-gold/10' },
    { label: 'AI Diagnostic Precision', value: '98.2%', change: 'Active Feedback Loop', icon: Cpu, color: 'text-emerald-600 bg-emerald-50' }
  ];

  // Mock Active User Lists
  const mockUsers = [
    { name: 'Uche Okafor', role: 'Student', level: 'Grade 9', school: 'Kings College, Lagos', status: 'Completed', score: 88 },
    { name: 'Bisi Adebayo', role: 'Student', level: 'Grade 12', school: 'Queen\'s College, Yaba', status: 'Completed', score: 92 },
    { name: 'Tosin Alao', role: 'Student', level: 'Undergraduate', school: 'Unilag', status: 'Completed', score: 79 },
    { name: 'Dr. Chidi Nwosu', role: 'Counsellor', level: 'Staff', school: 'Federal Staff School', status: 'Observer', score: 0 },
    { name: 'Funmi Johnson', role: 'Parent', level: 'Observer', school: 'None', status: 'Reviewing', score: 0 }
  ];

  // Mock Sector Distribution data for custom visual SVG bar-chart
  const sectorData = [
    { sector: 'Technology', count: 590, pct: '41%' },
    { sector: 'Finance & Banking', count: 310, pct: '21%' },
    { sector: 'Healthcare & Nursing', count: 220, pct: '15%' },
    { sector: 'Smart Agriculture', count: 180, pct: '12%' },
    { sector: 'Infrastructure Eng.', count: 120, pct: '8%' }
  ];

  // Mock AI feedback and API logs
  const aiLogs = [
    { timestamp: 'Just now', model: 'gemini-3.5-flash', grade: 'Grade 12', confidence: '94%', tokenCount: 1420, status: 'Success' },
    { timestamp: '4 mins ago', model: 'gemini-3.5-flash', grade: 'Grade 9', confidence: '89%', tokenCount: 1210, status: 'Success' },
    { timestamp: '12 mins ago', model: 'gemini-3.5-flash', grade: 'Undergraduate', confidence: '91%', tokenCount: 1540, status: 'Success' },
    { timestamp: '20 mins ago', model: 'gemini-3.5-flash', grade: 'Grade 12', confidence: '95%', tokenCount: 1390, status: 'Success' }
  ];

  const handleExportCSV = () => {
    // Generate simple csv string in-browser and prompt save
    const headers = 'Name,Role,GradeLevel,School,Status,ReadinessScore\n';
    const rows = mockUsers.map(u => `"${u.name}","${u.role}","${u.level}","${u.school}","${u.status}",${u.score}`).join('\n');
    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(headers + rows);
    
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', `careercompass_analytics_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSuccessToast('Assessment analytical dataset exported to CSV successfully.');
    setTimeout(() => setSuccessToast(''), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-brand-primary/10 pb-6">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-full">
            COUNSELLOR CONSOLE
          </span>
          <h1 className="font-display font-bold text-3xl text-brand-primary mt-3">
            Institutional Diagnostic Dashboard
          </h1>
          <p className="text-brand-dark/70 text-xs mt-1">
            Real-time analytics, user tracking, and Gemini API operational diagnostic metrics.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="px-5 py-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-brand-primary/10 cursor-pointer w-full sm:w-auto"
        >
          <Download className="h-4 w-4" />
          Export Datasets (CSV)
        </button>
      </div>

      {successToast && (
        <div className="p-3 mb-6 text-xs font-semibold text-brand-teal bg-brand-teal/5 border border-brand-teal/15 rounded-xl text-center">
          ✓ {successToast}
        </div>
      )}

      {/* Grid: 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-primary/10 shadow-xs relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono font-bold text-brand-dark/40 uppercase tracking-wider block">
                  {stat.label}
                </span>
                <div className={`h-8 w-8 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <p className="font-display font-bold text-2xl text-brand-primary">
                {stat.value}
              </p>
              <span className="text-[9px] text-brand-dark/50 font-medium block mt-1.5">
                {stat.change}
              </span>
            </div>
          );
        })}
      </div>

      {/* Grid: Sector distribution and Quick Analytics */}
      <div className="grid lg:grid-cols-12 gap-8 mb-10">
        
        {/* Sector distribution bar chart */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-5 w-5 text-brand-teal" />
            <h3 className="font-display font-bold text-lg text-brand-primary">
              Top Matched Career Sectors (Student Base)
            </h3>
          </div>

          <div className="space-y-4">
            {sectorData.map((data, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-brand-dark">
                  <span>{data.sector}</span>
                  <span>{data.count} candidates ({data.pct})</span>
                </div>
                <div className="h-2.5 w-full bg-brand-primary/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-primary rounded-full"
                    style={{ width: data.pct }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostic system performance panel */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-brand-primary/10 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="h-5 w-5 text-brand-gold" />
            <h3 className="font-display font-bold text-lg text-brand-primary">
              Platform Diagnostic Rules
            </h3>
          </div>
          <p className="text-brand-dark/70 text-xs leading-relaxed mb-6">
            Career Compass enforces the following psychometric constraints dynamically across all client sessions:
          </p>

          <ul className="space-y-3.5">
            {[
              { rule: 'Demographic Anonymization', val: 'Forced parameter stripping' },
              { rule: 'Adaptive Diagnostic Gate', val: 'Checks at >70% confidence' },
              { rule: 'NDPA Vault Protections', val: 'At-rest row hashes applied' },
              { rule: 'Educational System Sync', val: 'Live WAEC/JAMB indexing' }
            ].map((r, idx) => (
              <li key={idx} className="flex justify-between items-center text-xs border-b border-brand-primary/5 pb-2">
                <span className="font-semibold text-brand-primary">{r.rule}</span>
                <span className="font-mono text-[10px] font-bold bg-brand-bg text-brand-dark/50 px-2 py-0.5 rounded-lg border border-brand-primary/5">
                  {r.val}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Tabs Selector: User Lists vs. Live AI Endpoint Logs */}
      <div className="bg-white border border-brand-primary/10 rounded-3xl shadow-xs overflow-hidden">
        
        {/* Tab Header Toggle */}
        <div className="bg-brand-bg/50 px-6 py-4 border-b border-brand-primary/10 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveLogTab('users')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                activeLogTab === 'users' ? 'bg-brand-primary text-white' : 'text-brand-dark/60 hover:text-brand-primary'
              }`}
            >
              Registered Students Tracker
            </button>
            <button
              onClick={() => setActiveLogTab('ai_logs')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                activeLogTab === 'ai_logs' ? 'bg-brand-primary text-white' : 'text-brand-dark/60 hover:text-brand-primary'
              }`}
            >
              Gemini AI Logs & Confidence Audits
            </button>
          </div>

          <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider">
            Live Platform Monitoring
          </span>
        </div>

        {/* Tab Body */}
        <div className="overflow-x-auto">
          {activeLogTab === 'users' ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-bg/20 text-brand-dark/40 font-mono text-[9px] font-bold uppercase tracking-wider border-b border-brand-primary/5">
                  <th className="py-3 px-6">Candidate Name</th>
                  <th className="py-3 px-6">System Role</th>
                  <th className="py-3 px-6">Educational Tier</th>
                  <th className="py-3 px-6">School / Institution</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6 text-right">Readiness Index</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-primary/5">
                {mockUsers.map((user, idx) => (
                  <tr key={idx} className="text-xs hover:bg-brand-primary/5 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-brand-primary">{user.name}</td>
                    <td className="py-3.5 px-6">
                      <span className="inline-block text-[10px] bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-full font-semibold">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-medium">{user.level}</td>
                    <td className="py-3.5 px-6 text-brand-dark/60 italic">{user.school}</td>
                    <td className="py-3.5 px-6">
                      <span className={`inline-block h-2 w-2 rounded-full ${
                        user.status === 'Completed' ? 'bg-brand-teal' : 'bg-brand-gold'
                      } mr-1.5`}></span>
                      {user.status}
                    </td>
                    <td className="py-3.5 px-6 text-right font-mono font-bold text-brand-primary">
                      {user.score > 0 ? `${user.score}%` : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-bg/20 text-brand-dark/40 font-mono text-[9px] font-bold uppercase tracking-wider border-b border-brand-primary/5">
                  <th className="py-3 px-6">Timestamp</th>
                  <th className="py-3 px-6">Model Endpoint</th>
                  <th className="py-3 px-6">Assessment Context</th>
                  <th className="py-3 px-6">Calculated Confidence</th>
                  <th className="py-3 px-6">Transmission Tokens</th>
                  <th className="py-3 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-primary/5">
                {aiLogs.map((log, idx) => (
                  <tr key={idx} className="text-xs hover:bg-brand-primary/5 transition-colors">
                    <td className="py-3.5 px-6 font-mono font-bold text-brand-dark/50">{log.timestamp}</td>
                    <td className="py-3.5 px-6 font-semibold text-brand-primary">{log.model}</td>
                    <td className="py-3.5 px-6 font-medium">{log.grade}</td>
                    <td className="py-3.5 px-6 font-mono font-bold text-brand-teal">{log.confidence}</td>
                    <td className="py-3.5 px-6 font-mono text-brand-dark/60">{log.tokenCount} tokens</td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-block text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>

    </div>
  );
}
