import React, { useState } from "react";
import { Icons } from "../UI/Icons";

export default function AIContact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sadiqurrhaman199@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;

    setSending(true);
    // Simulate sending message (1.5s delay)
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", msg: "" });
      // Reset success status after 6 seconds
      setTimeout(() => setSent(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="reveal-on-scroll py-24 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
            🤖 AI Contact Assistant
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Cards panel (Interactive links) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Ambient Profile contact */}
            <div className="glass-premium p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 shadow-lg flex-1">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Icons.Cpu className="w-5 h-5 text-blue-500" />
                <span>Quick Communication</span>
              </h3>
              
              <div className="space-y-4">
                {/* Email copy bar */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/45 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Icons.Mail className="w-5 h-5 text-indigo-500" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Email Address</span>
                      <span className="text-xs md:text-sm font-bold text-slate-850 dark:text-slate-250 select-all">
                        sadiqurrhaman199@gmail.com
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 transition-colors text-slate-700 dark:text-slate-300"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? <Icons.Check className="w-4 h-4 text-emerald-500" /> : <Icons.Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Call */}
                <a
                  href="tel:+8801775070762"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/45 shadow-sm hover:scale-[1.01] transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <Icons.Phone className="w-5 h-5 text-emerald-500" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Call / WhatsApp</span>
                      <span className="text-xs md:text-sm font-bold text-slate-850 dark:text-slate-250">
                        +8801775070762
                      </span>
                    </div>
                  </div>
                  <Icons.ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Social channels card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-200/40 dark:border-slate-800/40 shadow-lg">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Professional Channels
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Sadiqur199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs shadow-md"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-md"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form (Dynamic States) */}
          <div className="lg:col-span-7 glass-premium rounded-3xl border border-slate-200/50 dark:border-slate-800/40 p-6 md:p-8 shadow-2xl relative flex flex-col justify-center min-h-[400px]">
            {sent ? (
              /* Success Animating Card */
              <div className="text-center py-10 animate-[float_0.4s_ease-out] flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-500 mb-6 relative">
                  <Icons.CheckCircle2 className="w-10 h-10 animate-bounce" />
                  <div className="absolute -inset-2 rounded-full border border-emerald-500/10 animate-ping" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out. The AI routing engine has dispatched your inquiry directly to Md. Sadiqur Rahman. You will receive a response shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-slate-200 dark:bg-slate-800 text-slate-850 dark:text-slate-250 text-xs font-bold px-6 py-2.5 rounded-xl border border-slate-350 dark:border-slate-700/60"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Standard Input fields form */
              <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl glass border border-slate-200/50 dark:border-slate-800 text-xs md:text-sm text-slate-850 dark:text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 shadow-inner"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl glass border border-slate-200/50 dark:border-slate-800 text-xs md:text-sm text-slate-850 dark:text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Message Description
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Hello Sadiqur, let's discuss project opportunities..."
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl glass border border-slate-200/50 dark:border-slate-800 text-xs md:text-sm text-slate-850 dark:text-slate-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100"
                >
                  {sending ? (
                    <>
                      <Icons.RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Icons.Mail className="w-5 h-5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
