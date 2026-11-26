import React from "react";

function StudentCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-gray-500 text-lg">{title}</p>
      <h2 className="text-3xl font-bold mt-3">{value}</h2>
    </div>
  );
}

export default StudentCard;
