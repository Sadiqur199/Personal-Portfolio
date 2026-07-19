import React, { useState } from "react";
import { Icons } from "../UI/Icons";

const caseStudiesData = [
  {
    id: "boiler",
    title: "Boiler Licensing & Monitoring Platform",
    projectType: "Government Enterprise Application",
    timeline: "Feb 2024 - Present",
    technologies: ["Nuxt.js", "Laravel", "Tailwind CSS"],
    img: "/boiler.png",
    problem: "Organizations needed a structured, centralized digital system to apply for boiler licenses, handle registrations, process renewals, request boiler repair audits, and update boiler name registries.",
    challenges: "Moving offline government bureaucratic inspection audits, licensing handshakes, and name change requests into a secure, low-latency, validation-driven web database.",
    solution: "Built a modular digital application pipeline in Nuxt.js, providing interactive wizard steps for license applications/renewals, and built-in PDF verification schemas via Laravel API controllers.",
    architecture: "Nuxt.js Frontend -> Laravel REST API -> PostgreSQL -> PDF Certificate Builder.",
    impact: "Decreased certificate processing lag by 55% for corporate boiler compliance teams.",
    performance: "Accelerated application submission validation time from 15 seconds to under 0.6 seconds.",
    lessons: "State validation patterns in multi-step wizard applications must remain highly decoupled from database writes to prevent partial form submission conflicts.",
    url: "http://84.247.176.156/",
  },
  {
    id: "bhumipedia",
    title: "Bhumipedia (Land Laws Portal)",
    projectType: "Government Information Portal",
    timeline: "Feb 2024 - Dec 2024",
    technologies: ["React.js", "Tailwind CSS", "Python"],
    img: "/Bhumipidia.png",
    problem: "Publishing, auditing, and searching through dozens of intricate land laws, manuals, and records was difficult for standard users who lacked structured reference tools.",
    challenges: "Implementing rigorous WCAG accessibility guidelines for diverse users and compiling dynamic search parsing for scanned legal PDF manuals.",
    solution: "Integrated dynamic accessibility selectors, structural screen-reader compatibility standards, and deployed an AI-driven chatbot using Python natural language processing to answer legal queries instantly.",
    architecture: "React.js Client -> Python Chatbot Engine -> FastAPI Middleware -> Land Laws Database.",
    impact: "Increased accessibility and search accuracy for citizen inquiries into land legislation by over 70%.",
    performance: "Chatbot query responses and semantic index retrieval reduced to under 800ms.",
    lessons: "Complex legal records must be indexed using vector storage nodes to enable intelligent semantic search matching instead of raw keyword searches.",
    url: "https://bhumipedia.land.gov.bd/",
  },
  {
    id: "australia-agritech",
    title: "Australia Agritech Platform",
    projectType: "International E-Commerce Platform",
    timeline: "Oct 2024 - Dec 2024",
    technologies: ["WordPress", "Elementor"],
    img: "/Australia%20Agritech.png",
    problem: "Farmers in Australia needed a reliable, accessible digital platform to purchase specialized agricultural drones, sensors, and replacement parts.",
    challenges: "Delivering a beautiful, responsive, and performance-optimized storefront containing high-resolution product galleries within a WordPress context.",
    solution: "Utilized WordPress core combined with customized Elementor structures, optimizing assets and lazy loading configurations to ensure fast initial page response times.",
    architecture: "WordPress Core -> Elementor Pro Layouts -> WooCommerce Engine -> Stripe Payment API.",
    impact: "Successfully launched a modern storefront, enabling crop-dusting and GIS drone shipments across rural Australia.",
    performance: "Maintained sub-2 second mobile load times through cache optimizations and asset minification.",
    lessons: "Heavy e-commerce images must be converted to WebP formats automatically to preserve bandwidth on remote agricultural cellular connections.",
    url: "http://aagri-tech.com.au/",
  },
  {
    id: "lged-lab",
    title: "LGED Laboratory Management Software",
    projectType: "Government Inventory & Testing System",
    timeline: "Feb 2024 - Present",
    technologies: ["React.js", "Tailwind CSS", ".NET"],
    img: "/LGED_LMS.png",
    problem: "Managing national equipment inventory across all LGED engineering labs required tracking maintenance windows, calibration updates, and dynamic formatting for structure test outputs.",
    challenges: "Synchronizing a centralized asset register with laboratory testing devices, flagging equipment calibration alerts, and integrating with secure government Single Sign-On (SSO).",
    solution: "Designed a real-time tracking interface detailing equipment status (Active, Maintenance, Calibration, Dumping). Designed a custom dynamic reporting engine to output lab test calculations while securing access with SSO.",
    architecture: "React SPA -> .NET Web API Core -> MS SQL Server -> SSO Integration Hub.",
    impact: "Unified inventory and testing pipelines for hundreds of local LGED engineering offices nationwide.",
    performance: "Dynamic test report calculations are fully processed and rendered inside the browser under 200ms.",
    lessons: "Calibration notifications are best managed using background scheduling services rather than recalculating criteria on every client page load.",
    url: "https://lms.lged.gov.bd/",
  },
  {
    id: "sreda",
    title: "SREDA Renewable Energy Database",
    projectType: "Ministry of Power, Energy & Resources Database",
    timeline: "2024",
    technologies: ["Nuxt.js", "Laravel", "Tailwind CSS"],
    img: "/sreda.png",
    problem: "The Sustainable and Renewable Energy Development Authority needed an interactive registry system to record, verify, and visualize national renewable energy indices.",
    challenges: "Mapping and filtering solar and wind energy production statistics across geographical districts with dynamic charts.",
    solution: "Created a sleek dashboard using Nuxt.js and Laravel, providing analytical tools to input and query sustainable generation capacities across regional grids.",
    architecture: "Nuxt.js Client -> Laravel Core -> MySQL Database -> Chart.js visualization.",
    impact: "Enabled public transparency and analytical tools for solar energy indexes across regional sectors.",
    performance: "Query filters process hundreds of historical energy spreadsheets without browser freeze.",
    lessons: "District-level energy logs are best visualised using SVG-based scaling maps to ensure responsive rendering.",
    url: "http://www.sreda.gov.bd",
  },
  {
    id: "drone-pos",
    title: "Drone Store Point-of-Sale (POS)",
    projectType: "E-Commerce & Retail Management System",
    timeline: "2024",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    img: "/Posh.png",
    problem: "Drone distributors required a high-efficiency checkout system to manage physical walk-in sales, barcode inputs, client invoices, and live stock adjustments.",
    challenges: "Managing checkout billing calculations, generating offline/online print-ready invoice forms, and keeping catalog counts aligned with warehouse records.",
    solution: "Built a custom Point of Sale (POS) system using React, featuring immediate sub-second checkout loops, local invoice compiling, and live API hooks for stock updates.",
    architecture: "React.js Client -> Node.js Backend API -> MongoDB Database -> Print invoice drivers.",
    impact: "Streamlined warehouse orders and client checkout operations for drone distributors.",
    performance: "POS billing calculation loops handle catalog updates instantly under 10ms.",
    lessons: "Local storage caching mechanisms are essential to prevent POS system downtime during brief local network interruptions.",
    url: "https://drone-portal-frontend-production.up.railway.app/",
  },
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(caseStudiesData[0].id);

  return (
    <section id="case-studies" className="reveal-on-scroll py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
            🚀 Best Projects Showcase
          </h2>
          <p className="text-sm md:text-base text-slate-650 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            A curated selection of my best and most impactful work. Featuring enterprise-grade platforms, international agri-tech solutions, and scalable e-commerce architectures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Case list selector (Vertical Timeline line) */}
          <div className="lg:col-span-4 relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-8 py-2">
            {caseStudiesData.map((cs) => {
              const isActive = activeCase === cs.id;
              return (
                <div
                  key={cs.id}
                  onClick={() => setActiveCase(cs.id)}
                  className="relative cursor-pointer group"
                >
                  {/* Outer active dot marker */}
                  <div className={`absolute left-[-31px] top-2 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 transition-all ${
                    isActive ? "bg-blue-600 scale-125 glow-blue" : "bg-slate-300 dark:bg-slate-700"
                  }`} />
                  
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {cs.timeline}
                    </span>
                    <h3 className={`font-extrabold text-sm md:text-base leading-tight mt-1 transition-colors ${
                      isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-350"
                    }`}>
                      {cs.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {cs.projectType}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Case Details display (Interactive Slide) */}
          <div className="lg:col-span-8">
            {caseStudiesData.map((cs) => {
              if (cs.id !== activeCase) return null;
              return (
                <div
                  key={cs.id}
                  className="glass-premium rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col gap-6"
                >
                  {/* Header Row */}
                  <div className="flex justify-between items-start flex-wrap gap-4 border-b border-slate-200/45 dark:border-slate-800/50 pb-6 w-full">
                    <div>
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                        {cs.projectType}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-2 leading-none">
                        {cs.title}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-200/20">
                        {cs.timeline}
                      </div>
                      {cs.url && (
                        <a
                          href={cs.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-extrabold text-blue-600 dark:text-blue-400 hover:text-blue-750 dark:hover:text-blue-350 transition-colors bg-blue-500/5 hover:bg-blue-500/15 border border-blue-500/20 px-2.5 py-1 rounded-lg self-start sm:self-auto shadow-sm"
                        >
                          <span>Visit Project</span>
                          <Icons.ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Top content: Image & specs */}
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <img
                      src={cs.img}
                      alt={cs.title}
                      className="w-full h-48 object-cover rounded-2xl shadow-md"
                    />
                    <div className="space-y-4">
                      {/* Technologies tags */}
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Technologies Utilized
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cs.technologies.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-bold bg-slate-200/50 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg text-slate-600 dark:text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Performance metrics indicators */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                          <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase block mb-1">
                            Business Impact
                          </span>
                          <span className="text-xs font-extrabold text-slate-800 dark:text-white leading-tight">
                            {cs.impact}
                          </span>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl">
                          <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase block mb-1">
                            Performance Boost
                          </span>
                          <span className="text-xs font-extrabold text-slate-800 dark:text-white leading-tight">
                            {cs.performance}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabular details grid */}
                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
                    <div className="space-y-1.5">
                      <h4 className="font-extrabold text-xs text-red-500 uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        Problem Statement
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-extrabold text-xs text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Technical Challenges
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {cs.challenges}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-extrabold text-xs text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Engineering Solution
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-extrabold text-xs text-purple-500 uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Lessons Learned
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {cs.lessons}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
