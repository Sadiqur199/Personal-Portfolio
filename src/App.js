import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/Layout/LoadingScreen";
import Navbar from "./components/Layout/Navbar";
import ParticleBackground from "./components/UI/ParticleBackground";
import CursorGlow from "./components/UI/CursorGlow";
import Hero from "./components/Sections/Hero";
import TechMarquee from "./components/UI/TechMarquee";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Achievements from "./components/Sections/Achievements";
import CaseStudies from "./components/Sections/CaseStudies";
import WorldMap from "./components/UI/WorldMap";
import GitHubStats from "./components/Sections/GitHubStats";
import Learning from "./components/Sections/Learning";
import Blog from "./components/Sections/Blog";
import AIContact from "./components/Sections/AIContact";
import ResumeModal from "./components/Modals/ResumeModal";
import Page404 from "./components/Page404";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Icons } from "./components/UI/Icons";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [show404, setShow404] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  // Hook to attach intersection observers for scroll animations
  useScrollReveal(loading);

  // Monitor scroll for Back-To-Top button & PWA install prompts
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    const handleBeforeInstallPrompt = (e) => {
      // Prevent browser default install banner
      e.preventDefault();
      // Store event to trigger later
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    const handleAppInstalled = () => {
      console.log("[PWA] Application successfully installed!");
      setShowInstallBtn(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    
    // Show installation prompt dialog
    deferredPrompt.prompt();
    
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("[PWA] User accepted installation prompt");
      } else {
        console.log("[PWA] User dismissed installation prompt");
      }
      // Reset install prompt
      setDeferredPrompt(null);
      setShowInstallBtn(false);
    });
  };

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  if (show404) {
    return <Page404 onGoHome={() => setShow404(false)} />;
  }

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Background Interactive Particles (Canvas) */}
      <ParticleBackground />

      {/* Mouse Radial Tracking Glow */}
      <CursorGlow />

      {/* Sticky Header Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        
        {/* Intro Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* CSS Scrolling Marquee */}
        <TechMarquee />

        {/* Biography Panel */}
        <About />

        {/* Skills progress bar grid */}
        <Skills />

        {/* Achievements counters */}
        <Achievements />

        {/* Projects Timeline Case Studies */}
        <CaseStudies />

        {/* SVGs map grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
              Global Scale
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
              🌍 Interactive World Map
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Interactive operations overview connecting our Dhaka engineering office with domestic and international partnerships.
            </p>
          </div>
          <WorldMap />
        </div>

        {/* GitHub stats and contribution graph */}
        <GitHubStats />

        {/* Continuous learning modules */}
        <Learning />

        {/* Dev Articles */}
        <Blog />

        {/* AI Contact Form */}
        <AIContact />
        
      </main>

      {/* Standard Footer */}
      <footer className="relative z-20 bg-slate-950 text-slate-400 py-12 border-t border-slate-900/60 text-center text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-extrabold text-sm text-white tracking-wider">
              MD. SADIQUR RAHMAN
            </span>
            <span>Senior Software Engineer &bull; Portfolio 2026</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Sadiqur199"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors"
              title="GitHub Profile"
            >
              <Icons.Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Icons.Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-900/65 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; {new Date().getFullYear()} Md. Sadiqur Rahman. All rights reserved.</p>
          <button
            onClick={() => setShow404(true)}
            className="font-mono text-[9px] hover:text-blue-500 transition-colors uppercase tracking-wider select-none"
            title="Inspect 404 design"
          >
            * Debug Custom 404 View *
          </button>
        </div>
      </footer>

      {/* Floating Back-To-Top Trigger Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-45 p-3.5 rounded-2xl bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll Back To Top"
      >
        <Icons.ChevronUp className="w-5 h-5" />
      </button>

      {/* Floating PWA Install Button (Bottom Left) */}
      {showInstallBtn && (
        <button
          onClick={handleInstallClick}
          className="fixed bottom-6 left-6 z-45 flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white font-extrabold text-xs shadow-2xl hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce"
          title="Install app locally"
        >
          <Icons.Download className="w-4 h-4 animate-pulse" />
          <span>Install App</span>
        </button>
      )}

      {/* Resume modal overlay */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}