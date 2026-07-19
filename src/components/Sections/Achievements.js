import React, { useState, useEffect, useRef } from "react";
import { Icons } from "../UI/Icons";

const achievementsData = [
  {
    title: "Government Enterprise Applications",
    timeline: "2024 - Present",
    desc: "Delivered complex frontend portals for national ministries (LGED and Land Ministry) focusing on secure API endpoints, dynamic PDF reports, and SSO integrations.",
    icon: <Icons.Briefcase className="w-6 h-6 text-blue-500" />,
    targetMetric: 4,
    suffix: " Portals",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Scalable MERN Stack Applications",
    timeline: "2023 - Present",
    desc: "Designed and optimized database-connected web portals featuring heavy concurrent usage, state persistence, and responsive UI dashboard architectures.",
    icon: <Icons.Cpu className="w-6 h-6 text-purple-500" />,
    targetMetric: 25000,
    suffix: "+ Users",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Learning Management Systems (LMS)",
    timeline: "2023 - 2024",
    desc: "Created highly accessible educational dashboards with course progress tracing, user enrollment, quiz engines, and interactive video nodes.",
    icon: <Icons.BookOpen className="w-6 h-6 text-emerald-500" />,
    targetMetric: 3,
    suffix: " Deployments",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Enterprise POS Systems",
    timeline: "2023",
    desc: "Built fast transaction processors featuring offline database syncing, invoice rendering, inventory tracing, and secure payment integrations.",
    icon: <Icons.Database className="w-6 h-6 text-amber-500" />,
    targetMetric: 5,
    suffix: "+ Systems",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "eCommerce Platforms",
    timeline: "2023 - 2024",
    desc: "Engineered scalable online stores with dynamic cart controls, custom payment hooks (Stripe/SSLCommerz), secure logins, and product inventory catalogs.",
    icon: <Icons.Globe className="w-6 h-6 text-cyan-500" />,
    targetMetric: 12,
    suffix: "+ Sites",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Freelance Projects: Australia Agritech",
    timeline: "2023 - 2024",
    desc: "Collaborated on remote applications supporting soil monitoring analytics, inventory listings, agricultural ecommerce, and responsive mapping grids.",
    icon: <Icons.MapPin className="w-6 h-6 text-pink-500" />,
    targetMetric: 6,
    suffix: "+ Modules",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Agile Development Teams",
    timeline: "2023 - Present",
    desc: "Engaged in collaborative Scrum environments, utilizing Jira sprints, Git version controls, strict CI/CD guidelines, and quality code peer reviews.",
    icon: <Icons.User className="w-6 h-6 text-indigo-500" />,
    targetMetric: 2,
    suffix: "+ Years",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Reusable Frontend Libraries",
    timeline: "2024",
    desc: "Maintained standard, accessible frontend components (UI buttons, modals, calendar widgets) matching CSS design tokens and optimization metrics.",
    icon: <Icons.Code className="w-6 h-6 text-teal-500" />,
    targetMetric: 150,
    suffix: "+ Items",
    gradient: "from-teal-500 to-emerald-500",
  },
];

// Helper component for count animation
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let observer;
    const startCount = () => {
      const duration = 2000;
      const steps = 40;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const val = Math.min(Math.floor((target / steps) * currentStep), target);
        setCount(val);

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCount();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  // Format numbers nicely if large (e.g. 25000 -> 25k)
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "k";
    }
    return num;
  };

  return (
    <span ref={elementRef} className="font-extrabold text-2xl md:text-3xl">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="reveal-on-scroll py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
            Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
            🏆 Key Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl glass-premium p-6 border border-slate-200/50 dark:border-slate-800/40 shadow-xl overflow-hidden hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 gradient-border-card"
            >
              {/* Top Row: Icon & Timeline */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-200/50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400">
                  {item.timeline}
                </span>
              </div>

              {/* Dynamic counter metric */}
              <div className={`text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-3 block`}>
                <Counter target={item.targetMetric} suffix={item.suffix} />
              </div>

              {/* Text Info */}
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base md:text-lg mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom decorative bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
