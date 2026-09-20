import { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Code2, Layers } from 'lucide-react';
import { Project } from '../types';
import CodeSnippetViewer from './CodeSnippetViewer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0d111a] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/60 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40 uppercase">
              {project.category}
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base font-mono text-cyan-400">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Chips */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">{m.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 mt-0.5">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Project Overview
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30">
              <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Problem Statement
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/30">
              <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Implemented Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet if applicable */}
          {project.codeSnippet && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Source Implementation Preview
              </h3>
              <CodeSnippetViewer
                filename={project.codeSnippet.filename}
                language={project.codeSnippet.language}
                code={project.codeSnippet.code}
                complexity={project.codeSnippet.complexity}
              />
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Learnings */}
          {(project.challenges || project.learnings) && (
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 text-xs">
              {project.challenges && (
                <div>
                  <span className="font-mono text-cyan-400 font-bold block mb-1">Key Engineering Challenge:</span>
                  <p className="text-slate-300 leading-relaxed">{project.challenges}</p>
                </div>
              )}
              {project.learnings && (
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="font-mono text-emerald-400 font-bold block mb-1">Key Learning:</span>
                  <p className="text-slate-300 leading-relaxed">{project.learnings}</p>
                </div>
              )}
            </div>
          )}

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-mono font-bold transition-colors border border-slate-700"
                data-cursor-text="GITHUB"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white text-xs font-mono transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
