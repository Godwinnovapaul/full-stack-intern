import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ onToggleSidebar }) {
  return (
    <nav className="bg-slate-700 text-slate-100 px-6 py-3 flex items-center justify-between shadow-xs sticky top-0 z-30">
      <div className="flex items-center gap-3">
        {/* Mobile toggle button */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-1 rounded hover:bg-slate-600 text-slate-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="text-xl font-bold tracking-wide text-white">
          Event Vendor
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-bold underline underline-offset-4" : "text-slate-300 hover:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive ? "text-white font-bold underline underline-offset-4" : "text-slate-300 hover:text-white"
          }
        >
          Book Vendor
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-white font-bold underline underline-offset-4" : "text-slate-300 hover:text-white"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
