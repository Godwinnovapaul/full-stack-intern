import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Vendors", path: "/vendors" },
    { name: "Services", path: "/services" },
    { name: "Book Vendor", path: "/booking" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed md:static top-[52px] left-0 z-30 w-52 bg-slate-100 p-4 border-r border-slate-200 h-[calc(100vh-52px)] transition-transform duration-200 ease-in-out shrink-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-sm font-bold text-slate-700 mb-4">Menu</h2>
        <ul className="space-y-1.5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `text-sm block px-3 py-2 rounded transition ${
                    isActive
                      ? "bg-white text-slate-900 font-bold shadow-xs border-l-4 border-slate-600"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
