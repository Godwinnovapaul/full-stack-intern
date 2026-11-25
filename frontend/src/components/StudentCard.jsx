import React from "react";

function StudentCard({ title, value, color }) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${color}`}>
      <h3 className="text-gray-500">{title}</h3>

      <h1 className="text-3xl font-bold mt-3">{value}</h1>
    </div>
  );
}

export default StudentCard;
