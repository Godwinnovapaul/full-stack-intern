import React from "react";

function EventCard({ title, date, venue, status }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm border border-slate-200">
      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      {date && <p className="text-sm text-slate-600 mt-1">Date: {date}</p>}
      {venue && <p className="text-xs text-slate-500 mt-1">Venue: {venue}</p>}
      {status && (
        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
          {status}
        </span>
      )}
    </div>
  );
}

export default EventCard;
