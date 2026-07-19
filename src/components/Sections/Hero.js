import React, { useState, useEffect } from "react";
import { Icons } from "../UI/Icons";

export default function Hero({ onOpenResume }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientWidth, clientHeight } = document.documentElement;
      // Convert coordinates to range -1 to 1
      const x = (e.clientX / clientWidth) * 2 - 1;
      const y = (e.clientY / clientHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Aurora Background Blobs */}
      <div className="absolute top-20 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[100px] animate-aurora pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[100px] animate-aurora delay-2000 pointer-events-none" />

      {/* Decorative Floating Tech Nodes */}
      <div className="absolute top-1/4 left-[8%] animate-float hidden md:block opacity-60">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-10 h-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
        />
      </div>
      <div className="absolute bottom-1/4 left-[12%] animate-float [animation-delay:2s] hidden md:block opacity-60">
        <img
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="Tailwind"
          className="w-12 h-12 drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]"
        />
      </div>
      <div className="absolute top-1/3 right-[10%] animate-float [animation-delay:4s] hidden md:block opacity-60">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node"
          className="w-11 h-11 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
        />
      </div>
      <div className="absolute bottom-1/3 right-[8%] animate-float [animation-delay:1s] hidden md:block opacity-60">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JS"
          className="w-10 h-10 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Remote Opportunities & Freelance</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white mb-6">
            Engineering High-Performance <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400">
              Enterprise Web Architectures
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
            Hi, I'm <strong className="text-slate-900 dark:text-white">Md. Sadiqur Rahman</strong>, a Senior Software Engineer specializing in scalable enterprise web applications, government portals, and complex API integrations. 
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 mb-8 w-full border-y border-slate-200/50 dark:border-slate-800/50 py-4 max-w-lg">
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">2+ Years</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Experience</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">15+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Completed Projects</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">CMMI L3</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Training Standards</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="flex-1 sm:flex-initial text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Icons.Mail className="w-5 h-5" />
              <span>Let's Talk</span>
            </a>
            
            <button
              onClick={onOpenResume}
              className="flex-1 sm:flex-initial text-center glass border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-800 dark:text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Icons.Eye className="w-5 h-5" />
              <span>Preview Resume</span>
            </button>
          </div>
        </div>

        {/* Right Portrait Visual Card (Parallax) */}
        <div className="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
          <div
            className="relative w-80 md:w-96 aspect-square rounded-3xl glass-premium shadow-2xl transition-all duration-200 p-3"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg) translateZ(10px)`,
            }}
          >
            {/* Ambient Backlight */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-blue-600/35 to-purple-600/35 blur-2xl" />
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/20 dark:border-white/10 pointer-events-none" />

            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
              <img
                src="/image.png"
                alt="Md. Sadiqur Rahman Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback visual if path is incorrect or image fails to load
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80";
                }}
              />
              
              {/* Overlapping Info Card */}
              <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl border border-white/20 dark:border-slate-800/30 flex justify-between items-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <h3 className="font-extrabold text-sm text-slate-800 dark:text-white leading-tight">
                    Sadiqur Rahman
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase mt-0.5">
                    Dream71 Software Engineer
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
