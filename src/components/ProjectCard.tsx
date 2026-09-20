import { ArrowUpRight, Code2, Github, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="glass-card group p-6 sm:p-7 rounded-3xl cursor-pointer flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/30"
      data-cursor-text="VIEW"
    >
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="mt-1.5 text-xs font-mono text-cyan-400/90 font-medium">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Key Metrics or Highlights */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mt-5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] font-mono">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-slate-500 text-[9px] uppercase">{m.label}</span>
                <span className="text-slate-200 font-bold truncate">{m.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Tech badges & CTA */}
      <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300">
          <span>Explore Case Study</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
