import React from "react";

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", glow: "hover:shadow-blue-500/20 hover:border-blue-500/50" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", glow: "hover:shadow-slate-500/20 hover:border-slate-500/50" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", glow: "hover:shadow-emerald-500/20 hover:border-emerald-500/50" },
  { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg", glow: "hover:shadow-green-500/20 hover:border-green-500/50" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", glow: "hover:shadow-red-500/20 hover:border-red-500/50" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", glow: "hover:shadow-green-600/20 hover:border-green-600/50" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", glow: "hover:shadow-gray-500/20 hover:border-gray-500/50" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", glow: "hover:shadow-green-500/20 hover:border-green-500/50" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", glow: "hover:shadow-yellow-500/20 hover:border-yellow-500/50" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", glow: "hover:shadow-blue-600/20 hover:border-blue-600/50" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", glow: "hover:shadow-purple-500/20 hover:border-purple-500/50" },
  { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", glow: "hover:shadow-sky-400/20 hover:border-sky-400/50" },
  { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", glow: "hover:shadow-blue-500/20 hover:border-blue-500/50" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", glow: "hover:shadow-orange-500/20 hover:border-orange-500/50" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", glow: "hover:shadow-slate-400/20 hover:border-slate-400/50" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", glow: "hover:shadow-sky-600/20 hover:border-sky-600/50" },
  { name: "Elementor", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968779.png", glow: "hover:shadow-pink-500/20 hover:border-pink-500/50" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", glow: "hover:shadow-blue-500/20 hover:border-blue-500/50" },
  { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png", glow: "hover:shadow-indigo-500/20 hover:border-indigo-500/50" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", glow: "hover:shadow-pink-600/20 hover:border-pink-600/50" },
];

export default function TechMarquee() {
  // Double list to make it continuous
  const doubledTechs = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-slate-100/50 dark:bg-slate-900/20 border-y border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950 z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950 z-10 pointer-events-none" />
      
      <div className="animate-marquee flex gap-8 whitespace-nowrap">
        {doubledTechs.map((tech, i) => (
          <div
            key={i}
            className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl glass-card transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-white dark:hover:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 shadow-sm cursor-default ${tech.glow}`}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all"
              onError={(e) => {
                // If dynamic load fails, use standard box layout
                e.target.style.display = "none";
              }}
            />
            <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors duration-200">
              {tech.name}
            </span>

            {/* Glowing Aura Effect */}
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl" />

            {/* Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg whitespace-nowrap">
              {tech.name} Stack
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
