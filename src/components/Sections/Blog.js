import React, { useState } from "react";
import { Icons } from "../UI/Icons";

const blogArticles = [
  {
    id: 1,
    title: "Building Scalable MERN Applications",
    category: "System Design",
    readTime: "7 min read",
    date: "June 25, 2026",
    tags: ["MERN", "Scale", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    summary: "Explore structural guidelines for scaling Node.js endpoints and MongoDB cluster integrations for high concurrent workloads.",
    content: `Scaling MERN Stack applications requires focusing on backend throughput, database connection pooling, and optimized query routing. 

    Key Strategies:
    1. Node.js Clustering: Run multiple instances of your Node process using PM2 to share network traffic across CPU cores.
    2. Connection Pooling: Ensure MongoDB has an active connection pool setup (e.g., maxPoolSize = 50) to prevent thread locks.
    3. Caching: Add an intermediate Redis layer to cache frequent query results like menus, configuration sets, or user profiles.
    4. Client-side Caching: Use TanStack Query (React Query) to prevent redundant GET queries from overloading endpoints.`,
  },
  {
    id: 2,
    title: "React Performance Optimization",
    category: "Frontend",
    readTime: "5 min read",
    date: "July 02, 2026",
    tags: ["React 19", "Hooks", "Virtual DOM"],
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    summary: "Discover React 19 compiler tricks, memoization, lazy loading patterns, and virtual list renderings.",
    content: `React 19 brings the React Compiler, which automatically optimizes memoization (useMemo/useCallback). However, writing efficient component layouts is still critical.

    Optimization checklist:
    1. Code Splitting: Implement lazy loading for secondary routes or overlays using React.lazy and Suspense.
    2. Large Array Optimization: Use virtualization libraries (like react-window) when rendering lists containing thousands of items.
    3. Render Profiler: Regularly run the React DevTools Profiler to find unnecessary parent re-renders.
    4. Asset Optimization: Preload essential fonts and lazy load images with loading="lazy" attributes.`,
  },
  {
    id: 3,
    title: "Modern Authentication in Node.js",
    category: "Security",
    readTime: "6 min read",
    date: "May 18, 2026",
    tags: ["Auth", "SSO", "JWT", "OAuth"],
    img: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?auto=format&fit=crop&w=600&q=80",
    summary: "Reviewing secure JWT setups, Single Sign-On (SSO) handshakes, and OAuth token rotations.",
    content: `Securing Node.js authentication starts with choosing the right token strategies and managing cookie permissions correctly.

    Best Practices:
    1. HTTP-Only Cookies: Never store Access Tokens in localStorage. Store JWTs inside HTTP-Only, Secure, SameSite=Strict cookies.
    2. Access vs. Refresh Tokens: Use short-lived Access Tokens (e.g., 15 mins) and long-lived Refresh Tokens (e.g., 7 days) stored securely.
    3. SSO (Single Sign-On): Configure standard SAML/OIDC handlers using Passport.js for enterprise credentials.
    4. Rate Limiting: Implement express-rate-limit on login routes to block brute-force attacks.`,
  },
  {
    id: 4,
    title: "Building Enterprise Dashboards",
    category: "UI/UX Design",
    readTime: "8 min read",
    date: "April 11, 2026",
    tags: ["Dashboard", "Charts", "Enterprise"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    summary: "Architecting interactive metric grids, responsive grids, and high-frequency real-time charts.",
    content: `Enterprise dashboards must compile huge data streams into clean charts without crashing browsers or disorienting users.

    Aesthetic & Code Guidelines:
    1. Atomic UI Structure: Build modular layout cells (KPI blocks, sidebar links, graph widgets).
    2. Grid Flexibility: Apply CSS Grid layout templates that scale elegantly from desktop wide screens to small mobile monitors.
    3. Lightweight Charting: Prefer micro-libraries like Chart.js or Recharts, and defer updates to requestIdleCallback when possible.
    4. Accessibility: Ensure screen readers can read chart tabular statistics easily.`,
  },
  {
    id: 5,
    title: "Reusable Component Architecture",
    category: "Architecture",
    readTime: "6 min read",
    date: "June 09, 2026",
    tags: ["Components", "Design System", "Dry"],
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    summary: "Structure UI components for reusability, customizability, and standard styling definitions.",
    content: `Creating component libraries requires balancing extreme customizability with layout consistency.

    Architecting rules:
    1. Separation of Concerns: Split business-connected containers from dumb presentational nodes.
    2. Prop Injection: Allow parent nodes to inject custom classes using tailwind-merge (twMerge) to override margins or colors safely.
    3. Keyboard Friendly: Standardize ARIA attributes, keydown listeners, and visual focus rings.
    4. Visual Storybook: Document library elements inside sandbox profiles to speed up testing loops.`,
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="reveal-on-scroll py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-pink-600 dark:text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full">
            Publications
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
            📝 Technical Blog
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Articles List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((art) => (
            <div
              key={art.id}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800/40 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Image Panel */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category Floating Tag */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                  {art.category}
                </span>
              </div>

              {/* Body info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta stats */}
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase mb-3">
                    <span>{art.date}</span>
                    <span>&bull;</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg md:text-xl leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {art.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {art.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Button */}
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="w-full py-3 rounded-2xl glass hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 dark:text-slate-300 font-extrabold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Read Article</span>
                  <Icons.ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Read Modal Overlay */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop click close */}
          <div
            onClick={() => setSelectedArticle(null)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="relative glass-premium rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/20 dark:border-slate-800/40 p-6 md:p-8 z-10 shadow-2xl animate-[float_0.3s_ease-out]">
            {/* Top Row header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-200/40 dark:border-slate-800/40 mb-6">
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              >
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Metadata */}
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
              {selectedArticle.title}
            </h3>
            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase mb-6">
              <span>{selectedArticle.date}</span>
              <span>&bull;</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            {/* Main Image banner */}
            <img
              src={selectedArticle.img}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover rounded-2xl mb-6 shadow-md"
            />

            {/* Markdown Body Text */}
            <div className="text-slate-700 dark:text-slate-350 text-sm md:text-base leading-relaxed whitespace-pre-line flex flex-col gap-4 font-normal">
              {selectedArticle.content}
            </div>

            {/* Modal Bottom Footer close buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200/40 dark:border-slate-800/40 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-lg text-xs"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
