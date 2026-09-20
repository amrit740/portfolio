import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenResume, theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'dark:bg-[#090b10]/80 bg-white/85 backdrop-blur-md dark:border-b dark:border-slate-800/80 border-b border-slate-200/90 py-3 shadow-lg dark:shadow-black/20 shadow-slate-200/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: AT Monogram Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          data-cursor-text="HOME"
          aria-label="Amrit Tiwari Home"
        >
          <div className="h-9 w-9 rounded-xl dark:bg-slate-900 bg-slate-100 dark:border-slate-700/80 border border-slate-300/80 flex items-center justify-center font-display font-black text-cyan-500 dark:text-cyan-400 text-sm shadow-inner group-hover:border-cyan-400/80 transition-colors">
            {PROFILE.monogram}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight dark:text-slate-100 text-slate-800 group-hover:text-cyan-500 transition-colors">
              {PROFILE.name}
            </span>
            <span className="text-[10px] font-mono dark:text-slate-400 text-slate-500 tracking-wider">
              CSE • FULL STACK
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 dark:bg-slate-900/60 bg-white/80 dark:border-slate-800/80 border border-slate-200/90 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                  isActive
                    ? 'dark:text-cyan-300 text-cyan-600 dark:bg-cyan-950/50 bg-cyan-50 font-semibold'
                    : 'dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800/50 hover:bg-slate-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Availability Badge, Theme Toggle & Resume CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Indicator Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full dark:bg-slate-900/80 bg-slate-100/90 dark:border-slate-800 border border-slate-200/80 text-xs dark:text-slate-300 text-slate-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px]">Available for Internships</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className="p-2 rounded-full dark:bg-slate-900/80 bg-slate-100 dark:border-slate-800 border border-slate-200/90 dark:text-amber-400 text-slate-700 hover:scale-105 active:scale-95 transition-all shadow-sm flex items-center justify-center"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            data-cursor-text="THEME"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-xs tracking-wide shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 transition-all"
            data-cursor-text="RESUME"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Buttons: Theme Toggle, Resume & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg dark:bg-slate-900/80 bg-slate-100 border dark:border-slate-800 border-slate-200 dark:text-amber-400 text-slate-700"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold"
            aria-label="View Resume"
          >
            Resume
          </button>
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 dark:text-slate-300 text-slate-700 hover:dark:text-white rounded-lg border dark:border-slate-800 border-slate-200 dark:bg-slate-900/80 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-b dark:border-slate-800 border-slate-200 dark:bg-[#090b10]/95 bg-white/95 backdrop-blur-xl px-6 py-5 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 mb-2 border-b dark:border-slate-800/80 border-slate-200">
            <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Internships
            </div>
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg dark:bg-slate-800 bg-slate-100 text-xs font-mono dark:text-slate-200 text-slate-700 border dark:border-slate-700 border-slate-200"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2 text-sm font-medium dark:text-slate-200 text-slate-700 hover:text-cyan-500 dark:hover:bg-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 border-t dark:border-slate-800/80 border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                View & Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

