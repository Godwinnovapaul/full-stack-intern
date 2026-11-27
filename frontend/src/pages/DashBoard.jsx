import React from "react";
import ServiceCard from "../components/ServiceCard";
import BookingsCounter from "../components/BookingsCounter";
import VendorSearch from "../components/VendorSearch";

function DashBoard() {
  const vendorServices = [
    { id: 1, title: "Catering", price: "₹40,000" },
    { id: 2, title: "Photography", price: "₹25,000" },
    { id: 3, title: "Decoration", price: "₹20,000" },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-slate-800">
        Event Vendor Dashboard
      </h1>

      {/* 4 Mild Colored Stat Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#4d7c6f] text-white p-3.5 rounded-md font-medium text-sm shadow-xs">
          Total Services : 50
        </div>
        <div className="bg-[#4a6b82] text-white p-3.5 rounded-md font-medium text-sm shadow-xs">
          Vendors : 25
        </div>
        <div className="bg-[#b87648] text-white p-3.5 rounded-md font-medium text-sm shadow-xs">
          Bookings : 120
        </div>
        <div className="bg-[#785980] text-white p-3.5 rounded-md font-medium text-sm shadow-xs">
          Revenue : ₹75,000
        </div>
      </div>

      {/* 3 Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vendorServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            price={service.price}
          />
        ))}
      </div>

      {/* 2 Columns: Bookings Counter and Search */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BookingsCounter />
        <VendorSearch />
      </div>
    </div>
  );
}

export default DashBoard;
