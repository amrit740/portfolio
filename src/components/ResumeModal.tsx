import { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { EDUCATION_DATA } from '../data/experience';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainResume = `
AMRIT TIWARI
Computer Science & Engineering Undergraduate | Software Development Intern Applicant
Phone: ${PROFILE.contact.phone} | Email: ${PROFILE.contact.email} | Location: ${PROFILE.contact.location}
LinkedIn: ${PROFILE.contact.linkedin} | GitHub: ${PROFILE.contact.github}

PROFESSIONAL SUMMARY:
Computer Science and Engineering undergraduate at Academy of Technology with an 8.425/10.0 CGPA through the 4th semester. Hands-on academic and hackathon experience in building practical, data-driven applications using Java, Python, SQL, and full-stack development concepts. Seeking a 3-month Software Developer Internship.

TECHNICAL SKILLS:
- Programming Languages: Java, Python, JavaScript
- Database: SQL (MySQL)
- Development: Full-Stack Development, Application Interface Design
- Core Strengths: Problem Solving, Application Logic, Data Management, Team Collaboration

PROJECTS:
1. AI-Powered Campus Assistant | Python, SQL, Full-Stack Development
- Centralized campus assistant concept to help students access academic information and organize college tasks.
- Developed backend functionality using Python and SQL to manage structured data.
- Designed a full-stack interface focused on campus information access.

2. Smart Study Planner & Performance Tracker | Python, SQL, Full-Stack Development
- Study-planning application for organizing subjects, tasks, deadlines, and academic progress.
- Implemented SQL-based data management for student tasks and performance records.
- Designed dashboard to track progress and highlight areas requiring attention.

3. Smart Placement & Skill Matching Platform | Java, SQL, Full-Stack Development
- Platform concept matching student profiles with placement opportunities.
- Developed Java application logic for student profiles and eligibility conditions.
- Used SQL to organize and retrieve student, skill, and opportunity data.

EDUCATION:
- Academy of Technology — B.Tech in Computer Science & Engineering | 5th Semester
  Expected Graduation: 2028 | CGPA: 8.425/10.0 through 4th Semester
  Higher Secondary: 72% | Secondary: 80%

HACKATHONS & ACHIEVEMENTS:
- Smart India Hackathon (SIH) — Participant
- FrostHacks — Participant
    `.trim();

    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-6 bg-[#0f131d] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-20 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-bold text-slate-200">
              AMRIT TIWARI — RESUME
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto print:max-h-none print:p-0 bg-[#0c1017]">
          {/* Resume Document Paper */}
          <div className="bg-[#0f141f] border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-lg print:border-none print:bg-white print:text-black">
            
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-800">
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                AMRIT TIWARI
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-mono text-cyan-400">
                Computer Science & Engineering Undergraduate | Software Development Intern Applicant
              </p>

              {/* Contact Strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-cyan-400" />
                  {PROFILE.contact.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  {PROFILE.contact.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {PROFILE.contact.location}
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 mt-2 text-xs font-mono text-slate-400">
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 flex items-center gap-1 text-cyan-400"
                >
                  <Linkedin className="w-3 h-3" />
                  linkedin.com/in/amrit-tiwari-570441377
                </a>
                <span>•</span>
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 flex items-center gap-1 text-cyan-400"
                >
                  <Github className="w-3 h-3" />
                  github.com/amrit740
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Computer Science and Engineering undergraduate at Academy of Technology with an 8.425/10.0 CGPA through the 4th semester. Hands-on academic and hackathon experience in building practical, data-driven applications using Java, Python, SQL, and full-stack development concepts. Seeking a 3-month Software Developer Internship to contribute to application development, database-related tasks, software testing, documentation, and collaborative development workflows.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mt-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                <div>
                  <span className="text-slate-500 uppercase text-[11px] block">Programming Languages:</span>
                  <span className="text-slate-200">Java, Python, JavaScript</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[11px] block">Database:</span>
                  <span className="text-slate-200">SQL (Relational Database Design)</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[11px] block">Development:</span>
                  <span className="text-slate-200">Full-Stack Development, Application Interface Design</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase text-[11px] block">Core Strengths:</span>
                  <span className="text-slate-200">Problem Solving, Application Logic, Data Management, Team Collaboration</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1">
                Projects
              </h2>

              <div className="space-y-4">
                {/* 1. AI-Powered Campus Assistant */}
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-slate-100">
                    <span>AI-Powered Campus Assistant</span>
                    <span className="font-mono text-cyan-300 text-[11px]">Python, SQL, Full-Stack Development</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    <li>Built a centralized campus assistant concept to help students access academic information and organize everyday college tasks.</li>
                    <li>Developed backend functionality using Python and SQL to manage structured academic and student data.</li>
                    <li>Designed a full-stack interface focused on improving access to campus-related information.</li>
                  </ul>
                </div>

                {/* 2. Smart Study Planner */}
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-slate-100">
                    <span>Smart Study Planner & Performance Tracker</span>
                    <span className="font-mono text-cyan-300 text-[11px]">Python, SQL, Full-Stack Development</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    <li>Built a study-planning application for organizing subjects, tasks, deadlines, and academic progress.</li>
                    <li>Implemented SQL-based data management for student tasks and performance records.</li>
                    <li>Designed a dashboard to track progress and highlight areas requiring attention.</li>
                  </ul>
                </div>

                {/* 3. Smart Placement */}
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold text-slate-100">
                    <span>Smart Placement & Skill Matching Platform</span>
                    <span className="font-mono text-cyan-300 text-[11px]">Java, SQL, Full-Stack Development</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    <li>Built a platform concept for matching student profiles with relevant placement opportunities.</li>
                    <li>Developed Java application logic for student profiles, opportunities, and eligibility conditions.</li>
                    <li>Used SQL to organize and retrieve student, skill, and opportunity data.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
                Education
              </h2>
              <div className="text-xs text-slate-300 space-y-1">
                <div className="flex flex-wrap justify-between font-bold text-slate-100">
                  <span>Academy of Technology — B.Tech in Computer Science & Engineering</span>
                  <span className="font-mono text-cyan-300">5th Semester</span>
                </div>
                <div className="flex flex-wrap justify-between text-slate-400 font-mono text-[11px]">
                  <span>Expected Graduation: 2028</span>
                  <span className="text-emerald-400 font-bold">CGPA: 8.425 / 10.0 through 4th Semester</span>
                </div>
                <div className="text-slate-400 font-mono text-[11px]">
                  Higher Secondary: 72% | Secondary: 80%
                </div>
              </div>
            </div>

            {/* Hackathons & Achievements */}
            <div className="mt-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
                Hackathons & Achievements
              </h2>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li><strong className="text-slate-100">Smart India Hackathon (SIH)</strong> — Participant</li>
                <li><strong className="text-slate-100">FrostHacks</strong> — Participant</li>
              </ul>
            </div>

            {/* Relevant Contribution Areas */}
            <div className="mt-6">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1">
                Relevant Internship Contribution Areas
              </h2>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Application development, feature implementation, and responsive interface support.</li>
                <li>Backend and database-related development using programming and SQL fundamentals.</li>
                <li>Debugging, functional testing, documentation, and collaborative project execution.</li>
                <li>Willingness to learn and work with JavaScript, Node.js, React.js, MySQL, and Git-based workflows.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
