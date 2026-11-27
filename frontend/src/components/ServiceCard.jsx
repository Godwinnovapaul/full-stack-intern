import React from "react";

function ServiceCard({ title, price }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm border border-slate-200">
      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      <p className="text-sm font-semibold text-[#4d7c6f] mt-2">{price}</p>
    </div>
  );
}

export default ServiceCard;
