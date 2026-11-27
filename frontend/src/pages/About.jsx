import React from "react";

function About() {
  return (
    <div className="max-w-3xl bg-white p-6 rounded-md shadow-sm border border-gray-200 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">
        About Event Vendor Booking System
      </h1>
      <p className="text-sm text-gray-600 leading-relaxed">
        The Event Vendor Booking System is a full-stack platform designed to help
        event organizers, hosts, and vendors collaborate smoothly. It simplifies
        searching for trusted event professionals—including catering, photography,
        decoration, and audio-visual specialists.
      </p>

      <div className="pt-2">
        <h2 className="text-base font-bold text-gray-800 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Single-page application with React Router DOM navigation</li>
          <li>Interactive booking form with strict client-side Zod validation</li>
          <li>Responsive sidebar and navigation layout with active tab highlighting</li>
          <li>Real-time counter and user input search handling</li>
        </ul>
      </div>

      <div className="pt-2 border-t border-gray-100 text-xs text-gray-500">
        <p>Project: Full Stack Web Development Lab</p>
        <p>Developer: Godwin Nova Paul</p>
      </div>
    </div>
  );
}

export default About;
