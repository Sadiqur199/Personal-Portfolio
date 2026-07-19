import React from "react";
import { Icons } from "../UI/Icons";

const learningTopics = [
  { name: "AI Assisted Development", status: "Active study", progress: "90%", desc: "Leveraging LLMs, dynamic prompt templates, and agentic workflows to increase development velocity.", icon: <Icons.Cpu className="w-5 h-5 text-indigo-500" /> },
  { name: "Advanced System Design", status: "Active study", progress: "85%", desc: "Mastering horizontal scalability, load balancing, caching topologies, and database replication schemas.", icon: <Icons.Globe className="w-5 h-5 text-blue-500" /> },
  { name: "Microservices Architecture", status: "Active study", progress: "80%", desc: "Decomposing monolith architectures, handling API gateways, message queues, and service meshes.", icon: <Icons.Terminal className="w-5 h-5 text-purple-500" /> },
  { name: "Docker Containerization", status: "Completed modules", progress: "90%", desc: "Building isolated development environments, multi-stage builds, container networks, and volume bindings.", icon: <Icons.Database className="w-5 h-5 text-cyan-500" /> },
  { name: "CI / CD Pipelines", status: "Active study", progress: "82%", desc: "Setting automated pipelines with GitHub Actions for automated unit testing, lint audits, and Vercel builds.", icon: <Icons.RefreshCw className="w-5 h-5 text-emerald-500" /> },
  { name: "Cloud: AWS / Azure", status: "Active study", progress: "75%", desc: "Managing EC2 nodes, S3 buckets, serverless Lambda controllers, and IAM security controls.", icon: <Icons.Cloud className="w-5 h-5 text-sky-500" /> },
  { name: "GraphQL Endpoints", status: "Active study", progress: "85%", desc: "Structuring GraphQL types, resolvers, caching layers, and Apollo client integrations.", icon: <Icons.Code className="w-5 h-5 text-pink-500" /> },
  { name: "End-to-End Testing", status: "Active study", progress: "80%", desc: "Writing user-simulation scripts using Playwright and Cypress to ensure regression-free deployments.", icon: <Icons.CheckCircle2 className="w-5 h-5 text-teal-500" /> },
];

export default function Learning() {
  return (
    <section id="learning" className="reveal-on-scroll py-24 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
            Education
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
            🎯 Currently Learning
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Remaining at the cutting edge of modern software engineering. Continuous exploration of cloud, security, and automated delivery.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningTopics.map((topic, i) => (
            <div
              key={i}
              className="group relative glass-card p-6 rounded-3xl border border-slate-200/40 dark:border-slate-800/40 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 group-hover:scale-105 transition-transform text-slate-700 dark:text-slate-350">
                    {topic.icon}
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-200/50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 border border-slate-200/20 dark:border-slate-850">
                    {topic.status}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 dark:text-white text-base md:text-lg mb-2 leading-tight">
                  {topic.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {topic.desc}
                </p>
              </div>

              {/* Progress Slider */}
              <div className="space-y-1.5 mt-auto">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                  <span>Topic Coverage</span>
                  <span>{topic.progress}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-250 dark:bg-slate-850 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: topic.progress }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
