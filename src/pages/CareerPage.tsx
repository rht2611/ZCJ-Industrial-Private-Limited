import { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Shield, GraduationCap, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { CAREER_OPENINGS, JobOpening, COMPANY_DETAILS } from '../data/companyData';

interface CareerPageProps {
  onApply: (job: JobOpening) => void;
}

export function CareerPage({ onApply }: CareerPageProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>('job-1');

  const toggleExpand = (id: string) => {
    setExpandedJobId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-100 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Join Our Plant Team</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Careers in Precision Manufacturing
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Build your professional career at ZCJ Industrial Private Limited. Work with modern multi-die heading machines, CNC Swiss lathes, and advanced optical metrology.
          </p>
        </div>
      </div>

      {/* Culture & Perks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Why ZCJ Industrial</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            A Safety-First, Growth-Oriented Workplace
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Zero-Harm Safety</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Strict 5S and Japanese lean manufacturing practices ensure pristine, hazard-free shop floors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Skill Development</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hands-on training on multi-station cold heading, CNC tooling setup, and SPC metrology software.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Merit Recognition</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Performance incentives, quarterly bonuses, and accelerated paths to production leadership.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Healthcare Coverage</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Group medical health insurance, annual wellness checkups, and subsidized factory canteen.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Current Job Openings</h2>
            <p className="text-xs text-slate-500">Greater Noida Manufacturing Facility</p>
          </div>
          <div className="text-xs text-slate-600">
            Send resumes to: <a href="mailto:careers@zcjindustrial.com" className="font-bold text-blue-600 hover:underline">careers@zcjindustrial.com</a>
          </div>
        </div>

        <div className="space-y-4">
          {CAREER_OPENINGS.map(job => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                {/* Header Summary */}
                <div
                  onClick={() => toggleExpand(job.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                        {job.openings} Openings
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.department}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        Exp: {job.experience}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        onApply(job);
                      }}
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                    >
                      Apply Now
                    </button>
                    <div className="p-1 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4 text-xs animate-fade-in">
                    <p className="text-slate-600 leading-relaxed">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">Key Responsibilities</h4>
                        <ul className="space-y-1.5 text-slate-600">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-blue-600 font-bold mt-0.5">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">Requirements &amp; Qualifications</h4>
                        <ul className="space-y-1.5 text-slate-600">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-blue-600 font-bold mt-0.5">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => onApply(job)}
                        className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        Submit Application for this Role
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
