import { ArrowRight, FileText, Mail, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export default function ResumeCTA({ onOpenResume }: ResumeCTAProps) {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#07090f] relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/60 mb-6 text-xs font-mono text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          LET'S BUILD SOMETHING MEANINGFUL.
        </h2>

        <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Interested in discussing a software developer internship, engineering collaboration, or exploring project architectures?
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            data-cursor-text="RESUME"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-semibold text-xs tracking-wider uppercase hover:text-cyan-300 hover:border-cyan-400/80 active:scale-95 transition-all flex items-center gap-2"
            data-cursor-text="CONTACT"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
