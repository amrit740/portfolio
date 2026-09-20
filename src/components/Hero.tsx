import { ArrowDown, ArrowUpRight, Code2, Download, FileText, Github, Linkedin, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import HeroScene from './HeroScene';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-cyan-300">
                HELLO, I'M AMRIT
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-[11px] font-mono text-slate-400">
                CSE 5th Sem @ AOT
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              BUILDING DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                EXPERIENCES
              </span>{' '}
              <br />
              THAT MATTER.
            </h1>

            {/* Professional Subtitle */}
            <div className="flex items-center gap-2 mb-4 text-sm sm:text-base font-mono text-cyan-400 font-medium">
              <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{PROFILE.title}</span>
            </div>

            {/* Supporting Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {PROFILE.description} Focusing on clean architecture, relational database management, and building robust software solutions.
            </p>

            {/* Key Verified Stats Pill Row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">CGPA</span>
                <span className="font-display text-base font-bold text-cyan-300">8.425 / 10.0</span>
                <span className="text-[10px] text-slate-400">Thru 4th Sem</span>
              </div>
              <div className="flex flex-col border-l border-slate-800 pl-3">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Status</span>
                <span className="font-display text-base font-bold text-emerald-400">5th Semester</span>
                <span className="text-[10px] text-slate-400">AOT (MAKAUT)</span>
              </div>
              <div className="flex flex-col border-l border-slate-800 pl-3">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Target</span>
                <span className="font-display text-base font-bold text-indigo-300">Internship</span>
                <span className="text-[10px] text-slate-400">Software Dev</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                data-cursor-text="EXPLORE"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:text-cyan-300 hover:border-cyan-400/60 active:scale-95 transition-all flex items-center gap-2 shadow-sm"
                data-cursor-text="RESUME"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Secondary Social Links & Location */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80 w-full text-xs font-mono text-slate-400">
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                data-cursor-text="GITHUB"
              >
                <Github className="w-4 h-4" />
                <span>github.com/amrit740</span>
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </a>

              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                data-cursor-text="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Right 3D Visual Experience */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <HeroScene />
          </div>

        </div>
      </div>
    </section>
  );
}
