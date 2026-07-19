import React from "react";
import { Icons } from "../UI/Icons";

const certificationsList = [
  {
    name: "Full Stack Web Development",
    org: "Programming Hero",
    date: "Dec 2022",
    credId: "PH-FSWD-829103",
    credUrl: "https://www.programming-hero.com/",
    badgeColor: "from-blue-500 to-indigo-500",
    iconLetter: "PH",
  },
  {
    name: "Web Design & Development",
    org: "Codman BD",
    date: "Aug 2021",
    credId: "CBD-WD-2021-9382",
    credUrl: "#",
    badgeColor: "from-purple-500 to-pink-500",
    iconLetter: "C",
  },
  {
    name: "CMMI Level 3 Standards Training",
    org: "Capability Maturity Model Integration",
    date: "Feb 2024",
    credId: "CMMI-L3-TR-73019",
    credUrl: "#",
    badgeColor: "from-emerald-500 to-teal-500",
    iconLetter: "CMMI",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="reveal-on-scroll py-24 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            Accreditations
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
            📜 Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificationsList.map((cert, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-3xl p-6 border border-slate-200/40 dark:border-slate-800/40 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Badge Header Row */}
                <div className="flex justify-between items-start mb-6">
                  {/* Badge emblem */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white font-extrabold text-xs shadow-lg relative`}>
                    {cert.iconLetter}
                    {/* Pulsing overlay ring */}
                    <div className="absolute -inset-1 rounded-2xl border border-white/20 animate-pulse" />
                  </div>

                  {/* Certified Status Badge */}
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified
                  </span>
                </div>

                {/* Info Text */}
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg md:text-xl leading-tight mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {cert.org}
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-6">
                  <div>
                    <strong>Issued:</strong> {cert.date}
                  </div>
                  <div>
                    <strong>Credential ID:</strong> <span className="font-mono text-[10px] bg-slate-200/50 dark:bg-slate-900/60 px-2 py-0.5 rounded border border-slate-200/30 dark:border-slate-800/30">{cert.credId}</span>
                  </div>
                </div>
              </div>

              {/* Action Credential Button */}
              <a
                href={cert.credUrl}
                target={cert.credUrl !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-full text-center glass border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 py-3 rounded-2xl text-xs font-bold text-slate-700 dark:text-slate-300 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Credential</span>
                <Icons.ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
