import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/experience';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#090b10] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-cyan-400" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            THE FOUNDATION.
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Rigorous undergraduate computer science curriculum emphasizing core algorithms, data management, and software systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main B.Tech Card */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-700/80 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 font-mono text-xs">
                  {EDUCATION_DATA.semester}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Expected Graduation: 2028
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                {EDUCATION_DATA.degree}
              </h3>

              <div className="text-sm font-medium text-cyan-400 mb-1">
                {EDUCATION_DATA.institution}
              </div>

              <div className="text-xs text-slate-400 mb-6 font-mono">
                {EDUCATION_DATA.affiliation}
              </div>

              <div className="space-y-2.5 pt-6 border-t border-slate-800">
                {EDUCATION_DATA.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Department of Computer Science & Engineering
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold">
                Regular Academic Standing
              </span>
            </div>
          </div>

          {/* Academic Metric Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* CGPA Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-800 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Cumulative Academic Performance
                </span>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">
                  8.425
                </div>
                <div className="text-xs font-mono text-cyan-300 mt-1">
                  out of 10.0 scale (Through 4th Sem)
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed pt-4 border-t border-slate-800">
                Maintained consistent top-tier academic score across foundational core engineering modules.
              </p>
            </div>

            {/* Schooling Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Higher Secondary (12th)</span>
                  <span className="text-slate-100 font-bold">72.0%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Secondary (10th)</span>
                  <span className="text-slate-100 font-bold">80.0%</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                Verified from academic transcripts
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
