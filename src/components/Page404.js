import React from "react";
import { Icons } from "./UI/Icons";

export default function Page404({ onGoHome }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-white overflow-hidden select-none">
      {/* Aurora Background Blobs */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse delay-1000" />

      {/* Floating Graphic Shapes (CSS Animation) */}
      <div className="absolute top-[10%] left-[10%] w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 rotate-45 animate-float" />
      <div className="absolute bottom-[15%] left-[20%] w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 animate-float [animation-delay:2s]" />
      <div className="absolute top-[20%] right-[15%] w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 animate-float [animation-delay:4s]" />
      <div className="absolute bottom-[20%] right-[10%] w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 rotate-12 animate-float [animation-delay:1s]" />

      <div className="max-w-md w-full px-6 text-center z-10 flex flex-col items-center">
        {/* Massive 404 code error indicator */}
        <div className="relative text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500 animate-pulse">
          404
          {/* Neon outline border */}
          <div className="absolute inset-0 text-white opacity-5 select-none pointer-events-none filter blur-sm">
            404
          </div>
        </div>

        {/* Humorous developer sub-text */}
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mt-6 mb-4 text-slate-100">
          Stack Overflow: Page Not Found!
        </h3>
        
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 mb-8 text-xs md:text-sm text-slate-400 font-mono text-left leading-relaxed">
          <span className="text-red-500">const</span> <span className="text-blue-400">developerState</span> = <span className="text-yellow-500">"debugging"</span>;<br />
          <span className="text-red-500">if</span> (page === <span className="text-purple-400">undefined</span>) &#123;<br />
          &nbsp;&nbsp;<span className="text-slate-500">{"// Oops! Sadiqur optimized this section so hard"}</span><br />
          &nbsp;&nbsp;<span className="text-slate-500">{"// that it compiled directly into another dimension."}</span><br />
          &nbsp;&nbsp;<span className="text-red-500">throw new</span> <span className="text-emerald-400">PageDissolvedException</span>(<span className="text-yellow-500">"Check your routing index!"</span>);<br />
          &#125;
        </div>

        {/* CTA recovering button */}
        <button
          onClick={onGoHome}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Icons.ChevronUp className="w-5 h-5 rotate-90" />
          <span>Return Safely Home</span>
        </button>
      </div>
    </div>
  );
}
