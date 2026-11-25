import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudentCard from "../components/StudentCard";
import Footer from "../components/Footer";

import { Button } from "../components/ui/button";

function DashBoard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>

          <p className="text-gray-500 mb-6">Smart Parking Management System</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StudentCard
              title="Total Slots"
              value="100"
              color="border-blue-500"
            />

            <StudentCard
              title="Available Slots"
              value="65"
              color="border-green-500"
            />

            <StudentCard
              title="Reserved Slots"
              value="35"
              color="border-orange-500"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md mt-8">
            <h2 className="text-xl font-bold mb-4">Parking Information</h2>

            <p className="mb-4">
              Check available parking spaces and reserve your parking slot.
            </p>

            <Button>Book Parking Slot</Button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default DashBoard;
