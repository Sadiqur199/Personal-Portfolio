import React, { useState } from "react";
import { Icons } from "../UI/Icons";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      degree: "Bachelor of Science (BSc) in Computer Science & Engineering",
      institution: "Bangladesh University of Business and Technology (BUBT)",
      timeline: "2019 - 2023",
      result: "",
      description: "Focused on Software Engineering, Data Structures & Algorithms, Database Management, and Machine Learning Systems.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) in Science",
      institution: "Masur Ali Govt College",
      timeline: "Graduated 2019",
      result: "",
      description: "Core studies in Computer Science, Mathematics, and Physics.",
    },
  ];

  const publications = [
    {
      title: "Simultaneous Detection of LSD and FMD in Cattle Using Ensemble Deep Learning",
      journal: "BIM 2025 (Bioinformatics & Medical Tech)",
      summary: "Developed an ensemble deep learning model to identify Lumpy Skin Disease (LSD) and Foot-and-Mouth Disease (FMD) symptoms in livestock with high precision, optimizing veterinary pre-diagnostics.",
      link: "#",
    },
    {
      title: "Research and Innovation of Applied Science Publications",
      journal: "International Journal of Research and Innovation of Applied Science (IJRIAS)",
      summary: "Published systematic analytical research exploring web framework efficiency, API request optimizations, and modern layout accessibility parameters.",
      link: "#",
    },
  ];

  const training = [
    {
      name: "CMMI Level 3 Training Standards",
      provider: "Capability Maturity Model Integration",
      detail: "In-depth training on standard software development procedures, Agile organizational frameworks, quality control, risk mitigations, and peer-review audits.",
    },
    {
      name: "Full Stack Web Development Certification",
      provider: "Programming Hero",
      detail: "Intensive training focusing on the MERN Stack, React architectures, server administration with Node/Express, and MongoDB routing.",
    },
    {
      name: "Professional Web Design & Theme Development",
      provider: "Codman BD",
      detail: "Specialized in customized layout styling, theme performance optimizations, accessibility adjustments, and cross-browser responsiveness.",
    },
  ];

  return (
    <section id="about" className="reveal-on-scroll py-24 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            Biography
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Bio Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-premium p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
                Md. Sadiqur Rahman
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider">
                Software Engineer Based in Dhaka, Bangladesh
              </p>
              
              <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed flex flex-col gap-4">
                <p>
                  I am a results-oriented Frontend Engineer with 2+ years of professional development experience creating responsive, high-performance web systems using React.js, Next.js, and TypeScript.
                </p>
                <p>
                  Specializing in complex integrations, I've successfully delivered government platforms (LGED Laboratory Management Software, Bhumipedia Land Ministry) and energy dashboards (SREDA Sustainable Energy project) matching CMMI Level 3 quality guidelines.
                </p>
                <p>
                  My focus lies in building modular layouts, optimizing loading speeds, integrating single sign-on (SSO), and ensuring full compliance with accessibility principles (WCAG).
                </p>
              </div>

              {/* Quick Contact Specs */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/40 text-xs text-slate-600 dark:text-slate-400 font-semibold">
                <div className="flex items-center gap-2">
                  <Icons.MapPin className="w-4 h-4 text-blue-500" />
                  <span>Mirpur-2, Dhaka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.Award className="w-4 h-4 text-emerald-500" />
                  <span>BSc in CSE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.Mail className="w-4 h-4 text-purple-500" />
                  <span>sadiqurrhaman199@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.Phone className="w-4 h-4 text-pink-500" />
                  <span>+8801775070762</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Tabs Navigation Card */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tabs */}
            <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-200/50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/40 mb-6">
              {[
                { id: "education", label: "Education", icon: <Icons.BookOpen className="w-4 h-4" /> },
                { id: "publications", label: "Research", icon: <Icons.Award className="w-4 h-4" /> },
                { id: "training", label: "Trainings", icon: <Icons.Cpu className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs md:text-sm font-extrabold tracking-wide transition-all ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-md"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Display Panel */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40 shadow-xl min-h-[350px]">
              
              {/* Education Panel */}
              {activeTab === "education" && (
                <div className="space-y-6">
                  {education.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative pl-6 border-l-2 border-blue-500/30 last:border-0 pb-2"
                    >
                      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-1">
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base md:text-lg">
                          {item.degree}
                        </h4>
                        <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs">
                          {item.timeline}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                        {item.institution}
                        {item.result && (
                          <>
                            {" "}&bull;{" "}
                            <span className="text-emerald-600 dark:text-emerald-400">{item.result}</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Research Panel */}
              {activeTab === "publications" && (
                <div className="space-y-6">
                  {publications.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative pl-6 border-l-2 border-purple-500/30 last:border-0 pb-2"
                    >
                      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-purple-500" />
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-1">
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base md:text-lg">
                          {item.title}
                        </h4>
                        <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">
                          Paper Publication
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                        {item.journal}
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Trainings Panel */}
              {activeTab === "training" && (
                <div className="space-y-6">
                  {training.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative pl-6 border-l-2 border-emerald-500/30 last:border-0 pb-2"
                    >
                      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-emerald-500" />
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-1">
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base md:text-lg">
                          {item.name}
                        </h4>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                          Certified
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                        {item.provider}
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
