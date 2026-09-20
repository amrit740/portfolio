import { Github, ExternalLink, GitBranch, Star, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function GitHubSection() {
  const featuredRepos = [
    {
      name: 'DSA-in-Java',
      description: 'Structured algorithms and core data structures implementation in Java with Big-O complexity notes.',
      language: 'Java',
      langColor: 'bg-amber-500',
      tag: 'Algorithms & OOP',
      url: 'https://github.com/amrit740',
    },
    {
      name: 'Campus-Assistant',
      description: 'Full-stack campus assistant concept managing student queries, academic notices, and schedules.',
      language: 'Python',
      langColor: 'bg-blue-500',
      tag: 'Python & SQL',
      url: 'https://github.com/amrit740',
    },
    {
      name: 'Smart-Study-Planner',
      description: 'Study tracking platform with task prioritization and SQL-backed academic progress tracking.',
      language: 'Python',
      langColor: 'bg-emerald-500',
      tag: 'Productivity & DB',
      url: 'https://github.com/amrit740',
    },
    {
      name: 'Placement-Matching-System',
      description: 'Java application logic evaluating student credentials against placement eligibility parameters.',
      language: 'Java',
      langColor: 'bg-amber-500',
      tag: 'Enterprise Logic',
      url: 'https://github.com/amrit740',
    },
  ];

  return (
    <section id="github" className="py-24 bg-[#0c0f17] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-cyan-400" />
              CODE REPOSITORIES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              OPEN SOURCE & CODE.
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
              Explore public repositories, algorithmic exercises, and full-stack software development projects.
            </p>
          </div>

          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400/80 text-slate-200 hover:text-white text-xs font-mono font-bold transition-all shadow-md group shrink-0"
            data-cursor-text="GITHUB"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Visit @amrit740</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              data-cursor-text="OPEN"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <span className="text-[10px] text-slate-500">{repo.tag}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
