import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudentCard from "../components/StudentCard";


function DashBoard() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>

          <p className="text-gray-500 mb-6">Smart Student Management System</p>

          {/* Student Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StudentCard title="GODWIN" value="100" />

            <StudentCard title="SUHAIL" value="100" />

            <StudentCard title="GOUTHAM" value="100" />
          </div>

          {/* Counter */}

          <div className="bg-white p-5 rounded-xl shadow-md mt-8 text-center">
            <h2 className="text-xl font-bold mb-3">Counter</h2>

            <p className="text-3xl font-bold mb-4">{count}</p>

            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-600 text-white px-5 py-2 rounded mr-3"
            >
              Increase +
            </button>

            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-600 text-white px-5 py-2 rounded"
            >
              Decrease -
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashBoard;
