import React from "react";

function VendorCard({ name, category, price, status }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm border border-slate-200">
      <div className="flex justify-between items-start">
        <h3 className="text-base font-semibold text-slate-800">{name}</h3>
        <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
          {category}
        </span>
      </div>
      <p className="text-sm font-semibold text-[#4d7c6f] mt-2">{price}</p>
      {status && (
        <p className="text-xs text-slate-500 mt-1">Status: {status}</p>
      )}
    </div>
  );
}

export default VendorCard;
