import React from "react";
import Pic from "../assets/food.jpg";

export default function PrivateDining() {
  return (
    <div>
      <section
        className="h-[75vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">PRIVATE DINING</h1>
          <p className="mt-4 text-gray-300">
            CLASSIC AFRICAN & CONTINENTAL DISHES DISHES
          </p>
        </div>
      </section>

      {/* Second Section */}

      <section className="min-h-screen text-black bg-white flex flex-col items-center px-6 py-16 md:px-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto ">
          <h2 className="font-normal text-3xl md:text-4xl mb-4">
            Book an Event
          </h2>
          <p className="text-[15px] leading-relaxed">
            We combine atmosphere, exceptional service, and contemporary
            elegance to create the perfect setting for your next corporate or
            social event. We’ll accommodate your private gathering, from family
            dinners to company celebrations.
          </p>
          <div className="mt-6">
            <button className="bg-red-500 text-white px-6 py-3 font-semibold rounded hover:bg-red-700 transition duration-300">
              INQUIRE NOW
            </button>
          </div>
        </div>

        {/* Private Dining Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-20 w-full max-w-6xl mx-auto gap-10">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Private Dining"
              className="w-full md:w-4/5 rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-normal mb-6">
              Private Dining
            </h2>
            <p className="text-[15px] leading-relaxed">
              We blend atmosphere, extraordinary service, and contemporary style
              to give you the perfect venue for your next corporate or social
              gathering. From intimate family luncheons to company celebrations,
             we’ve got you covered.
            </p>
          </div>
        </div>

        {/* Main Dining Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-20 w-full max-w-6xl mx-auto gap-10">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Main Dining"
              className="w-full md:w-4/5 rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-normal mb-6">
              Main Dining
            </h2>
            <p className="text-[15px] leading-relaxed">
              Enjoy a warm, elegant space for your corporate or social event.
              Whether it's a family dinner, a Christmas celebration, or a
              business meeting — our main dining area provides the perfect
              ambiance for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}

      <div className="pt-28 pb-16 bg-white text-center">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-red-500 uppercase tracking-wide text-sm mb-2">
            — Call our reservations team on +234 813 4995 529. —
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h1>
        </div>

        {/* Contact Form */}
        <form className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-left ">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 font-medium">Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="text-black p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 font-medium">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-black p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 mb-1 font-medium">Subject*</label>
            <input
              type="text"
              placeholder="Enter your subject"
              className="text-black p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 mb-1 font-medium">
              Your message (optional)
            </label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="text-black p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-2 rounded font-semibold hover:bg-red-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
