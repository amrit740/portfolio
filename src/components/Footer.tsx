import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080d] py-14 relative text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Monogram, Tagline & Back-To-Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center font-display font-black text-cyan-400 text-sm shadow-inner">
              {PROFILE.monogram}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100 font-display">
                {PROFILE.name.toUpperCase()}
              </div>
              <p className="text-[11px] text-slate-400">
                Building, learning, and evolving through code.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-400/50 transition-all text-xs"
            data-cursor-text="TOP"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Section: Quick Links & Socials */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
              aria-label="GitHub"
              data-cursor-text="GITHUB"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
              aria-label="LinkedIn"
              data-cursor-text="LINKEDIN"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE.contact.email}`}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
              aria-label="Email"
              data-cursor-text="EMAIL"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {currentYear} Amrit Tiwari. All verified academic and project rights reserved.
          </div>
          <div>
            Designed & developed by Amrit Tiwari • Academy of Technology
          </div>
        </div>

      </div>
    </footer>
  );
}
