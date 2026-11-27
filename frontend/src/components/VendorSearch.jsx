import React, { useState, useEffect } from "react";

function VendorSearch() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Search query:", search);
  }, [search]);

  return (
    <div className="bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-200 text-slate-700 font-semibold text-sm px-4 py-2">
        Search Vendor
      </div>
      <div className="p-4 space-y-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Vendor Name"
          className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
        />

        <div className="text-sm text-slate-700 min-h-[2rem]">
          <span>Vendor: </span>
          {/* React JSX safely auto-escapes user input */}
          <span className="font-semibold text-slate-900">{search}</span>
        </div>
      </div>
    </div>
  );
}

export default VendorSearch;
