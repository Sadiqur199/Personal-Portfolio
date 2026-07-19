import React, { useState, useEffect, useRef } from "react";

const skillsData = {
  frontend: [
    { name: "React / React 19", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Vue.js", level: 88 },
    { name: "Nuxt.js", level: 85 },
    { name: "Angular.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Material UI", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 55 },
    { name: "Express.js", level: 58 },
    { name: "REST APIs", level: 60 },
    { name: "GraphQL", level: 50 },
  ],
  database: [
    { name: "MongoDB", level: 85 },
    { name: "SQL / Postgre", level: 78 },
  ],
  cms: [
    { name: "WordPress Theme Dev", level: 90 },
    { name: "Elementor Page Builder", level: 95 },
  ],
  "dev-tools": [
    { name: "Git & GitHub workflows", level: 90 },
    { name: "Docker", level: 50 },
    { name: "Postman", level: 88 },
  ],
  deployment: [
    { name: "Vercel / Netlify", level: 92 },
    { name: "CI / CD Pipelines", level: 30 },
  ],
  "soft-skills": [
    { name: "Agile Sprints & Scrum", level: 92 },
    { name: "Remote Team Collaboration", level: 95 },
    { name: "Problem Solving & Debugging", level: 90 },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let observer;
    if (sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setAnimate(true);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(sectionRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  // When changing categories, briefly toggle animation to re-trigger bar grow
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal-on-scroll py-24 bg-slate-100/30 dark:bg-slate-900/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
            📊 Skill Progress
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Category Selection Menu */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {Object.keys(skillsData).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`w-full text-left py-4 px-6 rounded-2xl font-extrabold tracking-wide capitalize transition-all duration-200 border flex justify-between items-center ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-[1.02]"
                    : "bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                <span>{cat.replace("-", " ")}</span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    activeCategory === cat
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {skillsData[cat].length}
                </span>
              </button>
            ))}
          </div>

          {/* Right Progress Indicators Panel */}
          <div className="lg:col-span-8 glass-card p-6 md:p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40 shadow-xl min-h-[380px]">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span>{activeCategory.replace("-", " ")} Proficiency</span>
            </h3>

            <div className="space-y-6">
              {skillsData[activeCategory].map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  {/* Skill text info */}
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700 dark:text-slate-300">
                    <span>{skill.name}</span>
                    <span className="font-extrabold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                  </div>

                  {/* Slider Progress Bar */}
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Legend Tag */}
            <div className="mt-8 pt-6 border-t border-slate-200/45 dark:border-slate-800/50 text-[10px] text-slate-400 font-semibold uppercase flex gap-4">
              <span>* 90%+: Expert level integration</span>
              <span>* 80%+: Proficient application</span>
              <span>* 70%+: Competent execution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
