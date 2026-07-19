import React, { useState, useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  const [percent, setPercent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lock scrolling during loading
    document.body.style.overflow = "hidden";

    const duration = 1200; // 1.2s load simulation
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              document.body.style.overflow = "unset";
              onFinish();
            }, 500); // match fadeOut animation time
          }, 200);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Aurora Background Effect */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[100px] animate-pulse delay-700" />

      <div className="relative flex flex-col items-center">
        {/* Animated Brand Emblem */}
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-4xl shadow-[0_0_40px_rgba(59,130,246,0.5)] mb-6 animate-bounce">
          S
          <div className="absolute inset-0 rounded-2xl bg-white opacity-10 animate-ping" />
        </div>

        {/* Brand Text */}
        <h2 className="text-xl font-extrabold tracking-widest text-white mb-2 uppercase">
          Md. Sadiqur Rahman
        </h2>
        <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-8">
          Software Engineer (React)
        </p>

        {/* Progress Bar Container */}
        <div className="relative w-48 h-1 bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Counter Percent */}
        <span className="text-sm font-bold text-slate-500 mt-3 select-none">
          {percent}%
        </span>
      </div>
    </div>
  );
}
