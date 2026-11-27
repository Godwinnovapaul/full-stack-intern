import React, { useState, useEffect } from "react";

function BookingsCounter() {
  const [count, setCount] = useState(120);

  useEffect(() => {
    console.log("Bookings count updated:", count);
  }, [count]);

  return (
    <div className="bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-[#a85a66] text-white font-semibold text-sm px-4 py-2">
        Bookings Counter
      </div>
      <div className="p-4 space-y-4">
        <div className="text-2xl font-bold text-slate-800">
          Bookings : {count}
        </div>
        <div className="space-y-2">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="w-full bg-[#4a6b82] hover:bg-[#3d596d] text-white py-2 rounded font-medium text-sm transition cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
            className="w-full bg-[#a85a66] hover:bg-[#8f4a55] text-white py-2 rounded font-medium text-sm transition cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingsCounter;
