import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Icons } from "../UI/Icons";

export default function Navbar({ onOpenResume }) {
  const { theme, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll properties
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "GitHub", href: "#github" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md shadow-lg border-b border-slate-200/40 dark:border-slate-800/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 transition-all duration-75 scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Brand Logo with Animation */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
            S
            <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm md:text-base text-slate-800 dark:text-white tracking-wide leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              SADIQUR RAHMAN
            </span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-none">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-105 transition-all text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
          </button>

          {/* Resume Viewer Trigger Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Icons.Eye className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Small screen Toggle */}
        <div className="flex xl:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Icons.Sun className="w-5.5 h-5.5" /> : <Icons.Moon className="w-5.5 h-5.5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`xl:hidden fixed inset-y-0 right-0 w-80 max-w-full glass shadow-2xl z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out border-l border-slate-200/40 dark:border-slate-800/40 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-slate-200/50 dark:border-slate-800/50 mb-6">
            <span className="font-extrabold text-slate-800 dark:text-white tracking-wide">
              MENU
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              <Icons.X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-md"
          >
            <Icons.Eye className="w-4 h-4" />
            <span>View Resume</span>
          </button>
        </div>
      </div>
      
      {/* Background overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="xl:hidden fixed inset-0 bg-slate-950/30 dark:bg-slate-950/60 z-40 backdrop-blur-sm"
        />
      )}
    </header>
  );
}
