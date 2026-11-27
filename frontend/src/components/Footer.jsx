import React from "react";
import { CalendarCheck2, ShieldCheck, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 px-4 sm:px-8 mt-auto text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center text-white">
            <CalendarCheck2 className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-slate-200">
            EVENT VENDOR BOOKING SYSTEM
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Full Stack React Lab</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>SPA Architecture • Tailwind CSS • Shadcn UI • Zod Validation</span>
        </div>

        <div className="text-slate-500 font-mono text-[11px]">
          © {new Date().getFullYear()} Godwin Paul. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
