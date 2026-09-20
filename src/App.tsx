import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HackathonExperience from './components/HackathonExperience';
import Education from './components/Education';
import GitHubSection from './components/GitHubSection';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ResumeModal from './components/ResumeModal';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen dark:bg-[#090b10] bg-[#f8fafc] dark:text-[#e2e8f0] text-slate-800 font-sans selection:bg-cyan-500/25 selection:text-cyan-600 transition-colors duration-300">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Advanced Preloader Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Fixed Navigation Bar with Theme Toggle */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <HackathonExperience />
        <Education />
        <GitHubSection />
        <ResumeCTA onOpenResume={() => setResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Verified Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

