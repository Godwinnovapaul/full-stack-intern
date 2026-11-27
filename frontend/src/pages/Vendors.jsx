import React from "react";
import { Link } from "react-router-dom";

function Vendors() {
  const vendors = [
    { id: 1, name: "Royal Feast Caterers", category: "Catering", phone: "+91 98765 43210", status: "Available" },
    { id: 2, name: "Aura Cinematic Studio", category: "Photography", phone: "+91 98765 43211", status: "Available" },
    { id: 3, name: "Bloom & Blossom Decor", category: "Decoration", phone: "+91 98765 43212", status: "Booked" },
    { id: 4, name: "SonicWave AV Solutions", category: "Sound & Lighting", phone: "+91 98765 43213", status: "Available" },
    { id: 5, name: "Ocean Breeze Resort", category: "Venue", phone: "+91 98765 43214", status: "Available" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Our Vendors</h1>
        <Link
          to="/booking"
          className="bg-[#4d7c6f] hover:bg-[#3d655a] text-white text-xs font-medium px-3 py-2 rounded transition"
        >
          + Book a Vendor
        </Link>
      </div>

      <div className="bg-white rounded-md shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="p-3">Vendor Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vendors.map((vendor) => (
              <tr key={vendor.id} className="hover:bg-slate-50">
                <td className="p-3 font-medium text-slate-900">{vendor.name}</td>
                <td className="p-3 text-slate-600">{vendor.category}</td>
                <td className="p-3 text-slate-600">{vendor.phone}</td>
                <td className="p-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-medium ${
                      vendor.status === "Available"
                        ? "bg-[#edf5f2] text-[#2c5347]"
                        : "bg-[#fcf3ec] text-[#8c522d]"
                    }`}
                  >
                    {vendor.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vendors;
