import React, { useState, useEffect, useRef } from "react";
import { Icons } from "../UI/Icons";

export default function ResumeModal({ isOpen, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef(null);

  // Bind Keyboard Navigation listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "=" || e.key === "+") {
        setZoom((prev) => Math.min(prev + 0.15, 2));
      } else if (e.key === "-") {
        setZoom((prev) => Math.max(prev - 0.15, 0.6));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Fullscreen controller
  const toggleFullscreen = () => {
    const el = modalRef.current;
    if (!el) return;

    if (!isFullscreen) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Monitor document fullscreen events
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // Print PDF Trigger
  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = "/Software Engineer(React).pdf";
    document.body.appendChild(iframe);
    
    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      // Remove after printing dialog completes
      setTimeout(() => document.body.removeChild(iframe), 1000);
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop click close */}
      <div onClick={onClose} className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" />

      {/* Main Modal Element */}
      <div
        ref={modalRef}
        className="relative bg-slate-100 dark:bg-slate-900 w-full max-w-4xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/40 dark:border-slate-800/40 z-10 flex flex-col justify-between animate-[float_0.25s_ease-out]"
      >
        {/* Controls Bar Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-sm md:text-base text-slate-950 dark:text-white leading-tight">
              Resume Preview
            </h3>
            <span className="hidden sm:inline text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 px-2 py-0.5 rounded uppercase">
              sadiqur_cv.pdf
            </span>
          </div>

          {/* Action buttons controls */}
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Zoom controls */}
            <button
              onClick={() => setZoom((prev) => Math.max(prev - 0.15, 0.6))}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400"
              title="Zoom Out (-)"
            >
              <Icons.ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-slate-400 w-10 text-center select-none">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((prev) => Math.min(prev + 0.15, 2))}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400"
              title="Zoom In (+)"
            >
              <Icons.ZoomIn className="w-5 h-5" />
            </button>

            <span className="w-px h-5 bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            {/* Print */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400"
              title="Print Document"
            >
              <Icons.Print className="w-5 h-5" />
            </button>

            {/* Direct Download */}
            <a
              href="/Software Engineer(React).pdf"
              download="MD_SADIQUR_RAHMAN_Resume.pdf"
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 flex items-center justify-center"
              title="Download File"
            >
              <Icons.Download className="w-5 h-5" />
            </a>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Icons.Minimize className="w-5 h-5" /> : <Icons.Maximize className="w-5 h-5" />}
            </button>

            <span className="w-px h-5 bg-slate-200 dark:bg-slate-800" />

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-red-500/10 hover:text-red-500 text-slate-600 dark:text-slate-400 transition-colors"
              title="Close (Esc)"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="flex-1 overflow-auto bg-slate-250 dark:bg-slate-950 p-4 flex justify-center items-start">
          <div
            className="w-full max-w-2xl bg-white shadow-xl rounded-2xl overflow-hidden transition-transform duration-200 origin-top"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* Standard fallback container and PDF frame */}
            <iframe
              src="/Software Engineer(React).pdf?v=3#toolbar=0"
              className="w-full h-[75vh]"
              title="PDF Reader Frame"
              onError={(e) => {
                console.error("PDF Iframe loading error", e);
              }}
            />
          </div>
        </div>

        {/* Footer info banner */}
        <div className="px-6 py-3 bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 text-[10px] md:text-xs text-slate-400 font-medium flex justify-between items-center">
          <span>* Keyboard Navigation: Zoom In (+), Zoom Out (-), Close (Esc)</span>
          <span className="hidden sm:inline">Copyright &copy; 2026 Md. Sadiqur Rahman</span>
        </div>
      </div>
    </div>
  );
}
