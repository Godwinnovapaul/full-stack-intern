import React from "react";

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-56 min-h-screen p-5">
      <h2 className="text-lg font-bold mb-6">Menu</h2>

      <ul className="space-y-5">
        <li>Dashboard</li>
        <li>student details</li>
        <li>registration</li>
        <li>view details</li>
        <li>Profile</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
