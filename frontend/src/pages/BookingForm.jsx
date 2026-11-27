import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "../lib/bookingSchema";

function BookingForm() {
  const [successData, setSuccessData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      clientName: "",
      email: "",
      phone: "",
      serviceType: "",
      eventDate: "",
      budget: "",
      notes: "",
    },
  });

  const onSubmit = (data) => {
    setSuccessData(data);
    reset();
  };

  return (
    <div className="max-w-2xl bg-white p-6 rounded-md shadow-xs border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-1">
        Event Vendor Booking Form
      </h2>
      <p className="text-sm text-slate-500 mb-5">
        Fill out this form to book an event service with client-side validation.
      </p>

      {/* Success Notification Alert */}
      {successData && (
        <div className="mb-5 p-4 bg-[#f0f7f4] border border-[#bcdcd2] text-[#2c5347] rounded text-sm">
          <p className="font-semibold">Booking Submitted Successfully!</p>
          <p className="mt-1">
            Thank you, <span className="font-semibold">{successData.clientName}</span>. Your request for{" "}
            <span className="font-semibold">{successData.serviceType}</span> on{" "}
            <span className="font-semibold">{successData.eventDate}</span> (Budget: ₹{successData.budget}) has been recorded.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Client Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Client Name *
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("clientName")}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4d7c6f]"
          />
          {errors.clientName && (
            <p className="text-rose-600 text-xs mt-1">
              {errors.clientName.message}
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              {...register("email")}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4d7c6f]"
            />
            {errors.email && (
              <p className="text-rose-600 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number *
            </label>
            <input
              type="text"
              placeholder="e.g. 9876543210"
              {...register("phone")}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4d7c6f]"
            />
            {errors.phone && (
              <p className="text-rose-600 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Service Type & Event Date Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Service Type *
            </label>
            <select
              {...register("serviceType")}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4d7c6f] bg-white text-slate-800"
            >
              <option value="">-- Select Service --</option>
              <option value="Catering Service">Catering Service</option>
              <option value="Photography & Video">Photography & Video</option>
              <option value="Stage & Floral Decoration">Stage & Floral Decoration</option>
              <option value="Sound & Lighting">Sound & Lighting</option>
              <option value="Venue Booking">Venue Booking</option>
              <option value="DJ & Entertainment">DJ & Entertainment</option>
            </select>
            {errors.serviceType && (
              <p className="text-rose-600 text-xs mt-1">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Event Date *
            </label>
            <input
              type="date"
              {...register("eventDate")}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4d7c6f] bg-white text-slate-800"
            />
            {errors.eventDate && (
              <p className="text-rose-600 text-xs mt-1">
                {errors.eventDate.message}
              </p>
            )}
          </div>
        </div>

        {/* Estimated Budget */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Estimated Budget (₹) *
          </label>
          <input
            type="number"
            placeholder="e.g. 40000"
            {...register("budget")}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4d7c6f]"
          />
          {errors.budget && (
            <p className="text-rose-600 text-xs mt-1">
              {errors.budget.message}
            </p>
          )}
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Additional Requirements (Optional)
          </label>
          <textarea
            rows="3"
            placeholder="Mention guest count, dietary preferences, or specific timings..."
            {...register("notes")}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4d7c6f]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#4d7c6f] hover:bg-[#3d655a] text-white font-medium py-2 px-4 rounded transition text-sm cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit Booking Request"}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
