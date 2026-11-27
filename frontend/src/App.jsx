import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashBoard from "./pages/DashBoard";
import Vendors from "./pages/Vendors";
import Services from "./pages/Services";
import BookingForm from "./pages/BookingForm";
import About from "./pages/About";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        {/* Responsive Navbar */}
        <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Layout: Sidebar + Multi-page Routes */}
        <div className="flex flex-1">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <main className="flex-1 p-6 max-w-7xl overflow-auto">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
