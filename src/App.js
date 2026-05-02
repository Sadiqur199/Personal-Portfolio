import React from "react";
import { useState } from "react";

const skillData = {
  frontend: [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Nuxt.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Material UI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "SSO Integration", img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png" },
    { name: "API Integration", img: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },


  ],

  backend: [
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", img: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
    { name: "Middleware", img: "https://cdn-icons-png.flaticon.com/512/2721/2721264.png" },
    { name: "Firebase Auth", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

  ],

  database: [
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],

  state: [
    { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Context API", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  ],

  cms: [
    { name: "WordPress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Elementor", img: "https://cdn-icons-png.flaticon.com/512/5968/5968779.png" },
    { name: "Payment Integration", img: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png" },
  ],
};
const projects = [
  {
    title: "Bhumipedia (Gov Project)",
    desc: "A land management system built with React and API integration for government usage with SSO authentication.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    link: "#",
  },
  {
    title: "Lab Management Software",
    desc: "Dynamic lab testing software with reports, API integration and modern UI for LGED government project.",
    img: "https://images.unsplash.com/photo-1581091012184-5c4c6b9d63b5",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce website with cart, payment system and admin dashboard using React.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "#",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">Sadiqur Rahman</h1>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="/Software Engineer(React).pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-white pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-blue-600">Sadiqur</span> 👋
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Frontend Developer specializing in React.js & Next.js.
              I build scalable, modern & high-performance web applications.
            </p>

            <div className="flex gap-4">
              <a
                href="https://wa.me/8801775070762"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
              >
                Hire Me
              </a>

              <button className="border px-6 py-3 rounded-xl hover:bg-gray-100">
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <img
              src="/image.png"
              alt="profile"
              className="rounded-2xl shadow-xl w-80"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I am a results-driven Frontend Engineer with strong expertise in building scalable, high-performance web applications using React.js, Next.js, and modern JavaScript technologies. With hands-on experience in government and enterprise-level projects, I specialize in creating clean, maintainable code and intuitive user interfaces.

          I have worked extensively on real-world systems including land management platforms, lab management software, and dynamic dashboards with secure API and SSO integrations. My focus is not just on development, but on delivering seamless user experience, optimized performance, and production-ready solutions.

          I am passionate about continuous learning, problem-solving, and turning complex requirements into simple, elegant digital products.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {Object.keys(skillData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full capitalize transition ${activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {skillData[activeTab].map((skill, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-3"
              />
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

        <div className="border-l-4 border-blue-600 pl-6 space-y-6">
          <div>
            <h3 className="font-bold text-lg">Software Engineer - Dream71</h3>
            <p className="text-gray-500 text-sm">2024 - Present</p>
            <p className="text-gray-600">Gov Projects, Bhumipedia, LMS</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Web Developer - Robo Tech Valley</h3>
            <p className="text-gray-500 text-sm">2023 - 2024</p>
            <p className="text-gray-600">E-commerce, LMS, CMS</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-gray-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img src={p.img} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h3 className="font-bold mb-2">{p.title}</h3>

                <p className="text-gray-600 text-sm mb-3">
                  {p.desc.substring(0, 100)}...
                </p>

                <a
                  href={p.link}
                  className="text-blue-600 font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 Sadiqur Rahman. All rights reserved.</p>
      </footer>
    </div>
  );
}