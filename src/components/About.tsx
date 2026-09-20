import { useState } from 'react';
import { Terminal, Copy, Check, RotateCcw, MapPin, GraduationCap, Code2, Sparkles, BookOpen } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function About() {
  const [copied, setCopied] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: 'whoami', output: PROFILE.terminalCommands.whoami },
    { cmd: 'current-focus', output: PROFILE.terminalCommands.focus },
    { cmd: 'education', output: PROFILE.terminalCommands.education },
    { cmd: 'status', output: PROFILE.terminalCommands.status },
  ]);
  const [inputVal, setInputVal] = useState('');

  const executeCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    }

    let out = '';
    switch (cleanCmd) {
      case 'whoami':
        out = PROFILE.terminalCommands.whoami;
        break;
      case 'current-focus':
      case 'focus':
        out = PROFILE.terminalCommands.focus;
        break;
      case 'education':
      case 'edu':
        out = PROFILE.terminalCommands.education;
        break;
      case 'status':
        out = PROFILE.terminalCommands.status;
        break;
      case 'contact':
        out = `${PROFILE.contact.email} | ${PROFILE.contact.phone}`;
        break;
      case 'location':
        out = PROFILE.education.location;
        break;
      case 'help':
        out = 'Available commands: whoami, focus, education, status, contact, location, clear';
        break;
      default:
        out = `command not found: ${cleanCmd}. Type "help" for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: cleanCmd, output: out }]);
    setInputVal('');
  };

  const handleCopyCard = () => {
    const info = `Name: ${PROFILE.name}\nRole: ${PROFILE.title}\nEducation: ${PROFILE.education.degree}, ${PROFILE.education.institution}\nCGPA: ${PROFILE.education.cgpa}\nEmail: ${PROFILE.contact.email}`;
    navigator.clipboard.writeText(info);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const infoCards = [
    {
      num: '01',
      title: 'Computer Science Student',
      desc: 'B.Tech in CSE at Academy of Technology (MAKAUT). Maintaining an 8.425/10.0 CGPA with strong fundamentals in algorithms, DBMS, and operating systems.',
      icon: GraduationCap,
    },
    {
      num: '02',
      title: 'Full Stack Development',
      desc: 'Developing end-to-end applications bridging interactive user interfaces with structured backend APIs and database architectures.',
      icon: Code2,
    },
    {
      num: '03',
      title: 'Java & Problem Solving',
      desc: 'Proficient in Java OOP and algorithmic logic. Dedicated to solving algorithmic problems with clean, scalable, and memory-efficient code.',
      icon: Terminal,
    },
    {
      num: '04',
      title: 'Hackathon Enthusiast',
      desc: 'Participant in Smart India Hackathon (SIH) and FrostHacks, delivering collaborative software solutions under rapid deadline pressure.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0c0f17] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-cyan-400" />
            ABOUT ME
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            BEHIND THE CODE.
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base leading-relaxed">
            Passionate about turning concepts into clean, functional applications. Here is a snapshot of my academic journey and technical mindset.
          </p>
        </div>

        {/* Split-screen layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Story & Pillar Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="font-display text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                The Journey So Far
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I'm Amrit Tiwari, a Computer Science & Engineering student at{' '}
                <span className="text-cyan-300 font-medium">Academy of Technology</span>, affiliated with{' '}
                <span className="text-slate-200 font-medium">MAKAUT</span>.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I enjoy building practical software solutions, exploring modern web technologies, and solving algorithmic problems. My technical focus encompasses full-stack development, Java programming, database systems, and crafting responsive digital interfaces.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm continuously learning, experimenting, and refining my ability to architect robust real-world applications that solve tangible problems.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Hooghly, West Bengal, India</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.num}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-cyan-400">{card.num}</span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="font-display font-semibold text-slate-100 text-sm mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Developer Identity Card & Terminal */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Developer Identity Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 flex items-center justify-center font-display font-black text-cyan-400 text-lg shadow-inner">
                    {PROFILE.monogram}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-slate-100 text-sm tracking-wide">
                      AMRIT.TIWARI
                    </h3>
                    <p className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      verified student profile
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyCard}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-700/60"
                  title="Copy developer details"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Identity Specifications Grid */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-slate-800 text-xs">
                <div>
                  <span className="font-mono text-slate-500 block uppercase text-[10px]">Role</span>
                  <span className="font-medium text-slate-200 text-xs mt-0.5 block">Full Stack Developer</span>
                </div>
                <div>
                  <span className="font-mono text-slate-500 block uppercase text-[10px]">Education</span>
                  <span className="font-medium text-slate-200 text-xs mt-0.5 block">B.Tech CSE (5th Sem)</span>
                </div>
                <div>
                  <span className="font-mono text-slate-500 block uppercase text-[10px]">Institution</span>
                  <span className="font-medium text-slate-200 text-xs mt-0.5 block">Academy of Technology</span>
                </div>
                <div>
                  <span className="font-mono text-slate-500 block uppercase text-[10px]">Academic CGPA</span>
                  <span className="font-bold text-cyan-300 text-xs mt-0.5 block">8.425 / 10.0</span>
                </div>
              </div>

              {/* Interactive Terminal Panel */}
              <div className="mt-5 rounded-2xl bg-[#06080d] border border-slate-800/90 overflow-hidden font-mono text-xs terminal-dark">
                {/* Terminal Bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-slate-400 terminal-dark">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] text-slate-400">bash — 80x24</span>
                  </div>
                  <button
                    onClick={() => {
                      setTerminalHistory([
                        { cmd: 'whoami', output: PROFILE.terminalCommands.whoami },
                        { cmd: 'current-focus', output: PROFILE.terminalCommands.focus },
                      ]);
                    }}
                    className="hover:text-slate-200 p-1"
                    title="Reset Terminal"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Terminal Logs & Input */}
                <div className="p-4 space-y-2.5 max-h-56 overflow-y-auto">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <span className="text-slate-500">$</span>
                        <span>{item.cmd}</span>
                      </div>
                      <div className="text-slate-300 pl-4 border-l border-slate-800/80 text-[11px]">
                        {item.output}
                      </div>
                    </div>
                  ))}

                  {/* Active Input Line */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      executeCommand(inputVal);
                    }}
                    className="flex items-center gap-1.5 pt-1 text-cyan-400"
                  >
                    <span className="text-slate-500">$</span>
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="try 'help', 'status', 'whoami'..."
                      className="bg-transparent text-slate-200 outline-none w-full placeholder:text-slate-600 text-xs font-mono"
                    />
                  </form>
                </div>

                {/* Command Pills for Quick Tap */}
                <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="text-slate-500">Suggested:</span>
                  {['whoami', 'focus', 'education', 'status', 'contact'].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => executeCommand(cmd)}
                      className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 hover:bg-slate-700 transition-colors"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
