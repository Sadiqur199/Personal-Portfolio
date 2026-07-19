import React, { useState, useEffect, useRef } from "react";

export default function WorldMap() {
  const [counts, setCounts] = useState({ projects: 0, countries: 0, clients: 0 });
  const [activePin, setActivePin] = useState(null);
  const mapRef = useRef(null);

  // Counter animation on scroll / mount
  useEffect(() => {
    let observer;
    const startCounters = () => {
      const targets = { projects: 45, countries: 3, clients: 18 };
      const duration = 2000; // 2 seconds
      const steps = 50;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCounts({
          projects: Math.min(Math.floor((targets.projects / steps) * currentStep), targets.projects),
          countries: Math.min(Math.floor((targets.countries / steps) * currentStep), targets.countries),
          clients: Math.min(Math.floor((targets.clients / steps) * currentStep), targets.clients),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    if (mapRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounters();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(mapRef.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  const pins = [
    {
      id: "bd",
      name: "Bangladesh (HQ)",
      role: "Dream71, Robo Tech Valley, Boiler & SREDA Projects",
      x: "72%",
      y: "56%",
      color: "bg-emerald-500",
      pingColor: "border-emerald-500",
    },
    {
      id: "au",
      name: "Australia",
      role: "Freelance Projects - Australia Agritech Platforms",
      x: "85%",
      y: "82%",
      color: "bg-blue-500",
      pingColor: "border-blue-500",
    },
    {
      id: "global",
      name: "Global Markets",
      role: "Targeted Remote Clients (USA, Europe, UK)",
      x: "30%",
      y: "35%",
      color: "bg-purple-500",
      pingColor: "border-purple-500",
    },
  ];

  return (
    <div ref={mapRef} className="reveal-on-scroll py-10">
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Statistics Columns */}
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center lg:text-left transition-all duration-300 hover:shadow-lg">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">
              Projects Completed
            </span>
            <div className="text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400">
              {counts.projects}+
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Gov Enterprise & Freelance Apps
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center lg:text-left transition-all duration-300 hover:shadow-lg">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">
              Active Regions
            </span>
            <div className="text-4xl lg:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {counts.countries}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Bangladesh, Australia, Future Global
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center lg:text-left transition-all duration-300 hover:shadow-lg">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">
              Clients Served
            </span>
            <div className="text-4xl lg:text-5xl font-extrabold text-purple-600 dark:text-purple-400">
              {counts.clients}+
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              B2B Partnerships & Government Departments
            </p>
          </div>
        </div>

        {/* Map Vector Display */}
        <div className="lg:col-span-2 relative glass-premium rounded-3xl p-4 md:p-6 overflow-hidden border border-slate-200/50 dark:border-slate-800/50 h-[300px] md:h-[450px]">
          {/* Custom Stylized Tech Map SVG Background */}
          <svg className="w-full h-full opacity-35 dark:opacity-20 pointer-events-none" viewBox="0 0 1000 500" fill="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Extremely stylized vector continent outlines for design */}
            {/* North America */}
            <path d="M150,100 L300,120 L280,220 L230,260 L180,240 Z" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* South America */}
            <path d="M250,280 L320,320 L290,440 L260,450 L230,360 Z" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Africa */}
            <path d="M450,220 L530,210 L580,280 L550,380 L490,380 L450,280 Z" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Eurasia */}
            <path d="M420,80 L750,70 L850,160 L800,240 L650,250 L530,160 Z" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Australia */}
            <path d="M780,340 L880,330 L870,400 L800,410 Z" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

            {/* Connection lines between pins (animated curves) */}
            {/* BD to Australia */}
            <path
              d="M720,280 Q780,340 850,410"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="6,4"
              className="animate-[dash_5s_linear_infinite]"
              style={{ strokeDashoffset: 100 }}
            />
            {/* BD to Global US */}
            <path
              d="M720,280 Q510,210 300,175"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="6,4"
              className="animate-[dash_5s_linear_infinite]"
            />
          </svg>

          {/* Location pins */}
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="absolute group z-20"
              style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setActivePin(pin)}
              onMouseLeave={() => setActivePin(null)}
            >
              {/* Outer pulsing ring */}
              <div className={`absolute -inset-3 rounded-full border-2 animate-ping opacity-60 ${pin.pingColor}`} />
              {/* Inner core pin */}
              <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer ${pin.color} transition-transform duration-300 group-hover:scale-125`} />

              {/* Dynamic tooltip on hover */}
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-2 rounded-xl text-xs font-semibold shadow-xl transition-all duration-300 pointer-events-none w-56 whitespace-normal ${
                activePin?.id === pin.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}>
                <div className="font-bold text-sm border-b border-slate-700/20 dark:border-slate-200/20 pb-1 mb-1 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${pin.color}`} />
                  {pin.name}
                </div>
                <div className="font-normal text-slate-300 dark:text-slate-600 line-clamp-2 leading-relaxed">
                  {pin.role}
                </div>
              </div>
            </div>
          ))}

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] md:text-xs text-slate-500 dark:text-slate-400 glass px-4 py-2 rounded-xl border border-slate-200/30 dark:border-slate-800/30">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Bangladesh</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Australia</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Future Targets</span>
            </div>
            <span className="hidden sm:inline">Hover pins to details</span>
          </div>
        </div>
      </div>
    </div>
  );
}
