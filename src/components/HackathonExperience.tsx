import { Trophy, Users, Zap, CheckCircle2, Award, GitBranch, Terminal } from 'lucide-react';
import { HACKATHONS, INTERNSHIP_AREAS } from '../data/experience';

export default function HackathonExperience() {
  return (
    <section id="experience" className="py-24 bg-[#0c0f17] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-cyan-400" />
            HACKATHONS & COLLABORATIVE WORKFLOWS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            BUILDING UNDER PRESSURE.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on academic and hackathon experience conceptualizing, engineering, and delivering functional solutions alongside peers under strict deadlines.
          </p>
        </div>

        {/* Hackathon Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {HACKATHONS.map((hack) => (
            <div
              key={hack.id}
              className="glass-panel p-7 rounded-3xl border border-slate-800 relative group hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {hack.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-300">
                      {hack.role}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {hack.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs font-mono">
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] w-24 shrink-0">Key Focus:</span>
                  <span className="text-slate-200">{hack.focus}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] w-24 shrink-0">Tech Stack:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {hack.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Internship Contribution Areas (from verified resume) */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-1.5">
                <Zap className="w-3.5 h-3.5" />
                INTERNSHIP READINESS
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                How I Add Immediate Value
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50 self-start">
              3-Month Internship Target
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNSHIP_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-bold block mb-2">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display text-sm font-semibold text-slate-100 mb-2">
                    {area.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
