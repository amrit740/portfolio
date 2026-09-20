import { useState, useMemo } from 'react';
import { Search, Code2, Layers, Database, Wrench, Binary, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SKILLS } from '../data/skills';
import { SkillItem } from '../types';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'ALL', label: 'All Tech' },
    { id: 'PROGRAMMING', label: 'Languages' },
    { id: 'FRONTEND', label: 'Frontend' },
    { id: 'BACKEND', label: 'Backend' },
    { id: 'DATABASES', label: 'Databases' },
    { id: 'TOOLS', label: 'Tools & Dev' },
    { id: 'CORE CS', label: 'Core CS' },
  ];

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'ALL' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-cyan-400" />
              TECHNICAL COMPETENCIES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              TOOLS OF THE TRADE.
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
              Verified languages, frameworks, database systems, and core computer science principles applied across academic and personal projects.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., Java, SQL)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/80 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = activeSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkill(isSelected ? null : skill)}
                className={`glass-card p-5 rounded-2xl cursor-pointer relative group transition-all ${
                  isSelected
                    ? 'border-cyan-400 bg-slate-900/90 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/50'
                    : 'hover:border-slate-700'
                }`}
                data-cursor-text="INSPECT"
              >
                <div className="flex items-start justify-between mb-2.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                    {skill.category}
                  </span>
                  {skill.tag && (
                    <span className="text-[10px] font-mono text-slate-500">
                      {skill.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {skill.description}
                </p>

                {/* Connected Projects Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{skill.projects.length} connected project{skill.projects.length > 1 ? 's' : ''}</span>
                  <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform text-xs">
                    {isSelected ? '▲' : '▼'}
                  </span>
                </div>

                {/* Expanded Details when selected */}
                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-cyan-500/20 text-xs space-y-2 bg-slate-950/40 p-2.5 rounded-xl">
                    <div className="text-[11px] font-semibold text-cyan-300">Applied in:</div>
                    <ul className="space-y-1">
                      {skill.projects.map((proj, pIdx) => (
                        <li key={pIdx} className="text-slate-300 text-[11px] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="py-16 text-center text-slate-500 text-sm font-mono">
            No technical skills found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
