import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const serviceList = [
    {
      id: 1,
      name: "Catering Service",
      price: "₹40,000",
      description: "Full buffet catering with live counters, regional specialties, and desserts.",
    },
    {
      id: 2,
      name: "Photography & Videography",
      price: "₹25,000",
      description: "Candid photography, 4K video recording, drone coverage, and digital photo album.",
    },
    {
      id: 3,
      name: "Stage & Floral Decoration",
      price: "₹20,000",
      description: "Custom stage backdrops, entrance flower arches, lighting, and table centerpieces.",
    },
    {
      id: 4,
      name: "Sound & Lighting System",
      price: "₹18,000",
      description: "Professional concert-grade audio setup, wireless microphones, and ambient lights.",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Event Services</h1>
        <Link
          to="/booking"
          className="bg-[#4d7c6f] hover:bg-[#3d655a] text-white text-xs font-medium px-3 py-2 rounded transition"
        >
          Book Now
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {serviceList.map((service) => (
          <div
            key={service.id}
            className="bg-white p-5 rounded-md shadow-xs border border-slate-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-slate-900">{service.name}</h3>
                <span className="text-sm font-semibold text-[#4d7c6f]">{service.price}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <Link
                to="/booking"
                className="text-xs font-medium text-[#4d7c6f] hover:text-[#3d655a]"
              >
                Request Quote →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
