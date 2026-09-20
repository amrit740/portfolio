import { useState } from 'react';
import { Copy, Check, Terminal, Code2 } from 'lucide-react';

interface CodeSnippetViewerProps {
  filename: string;
  language: string;
  code: string;
  complexity?: {
    time: string;
    space: string;
  };
}

export default function CodeSnippetViewer({
  filename,
  language,
  code,
  complexity,
}: CodeSnippetViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-2xl bg-[#06080d] border border-slate-800 overflow-hidden font-mono text-xs shadow-xl terminal-dark">
      {/* Top Header */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between terminal-dark">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-300 font-bold text-xs">{filename}</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase">
            {language}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {complexity && (
            <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                Time: {complexity.time}
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                Space: {complexity.space}
              </span>
            </div>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-[11px]"
            title="Copy code to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code with Line Numbers */}
      <div className="p-4 overflow-x-auto max-h-72 overflow-y-auto leading-relaxed">
        <pre className="table">
          {lines.map((line, i) => (
            <div key={i} className="table-row hover:bg-slate-900/40">
              <span className="table-cell pr-4 text-right select-none text-slate-600 font-mono text-[11px]">
                {i + 1}
              </span>
              <span className="table-cell font-mono text-slate-200 text-[11px] whitespace-pre">
                {line}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
