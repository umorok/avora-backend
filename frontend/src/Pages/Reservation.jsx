import React, { useState } from "react";
import { reservationAPI } from "../api/api";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    start_time: "11:00am",
    end_time: "12:00pm",
    number_of_guests: "1 Person",
    special_requests: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Convert time format from "11:00am" to "11:00:00"
  const formatTime = (timeStr) => {
    const time = timeStr.toLowerCase();
    let [hour, minute] = time.replace(/[a-z]/g, "").split(":");
    
    if (time.includes("pm") && hour !== "12") {
      hour = parseInt(hour) + 12;
    }
    if (time.includes("am") && hour === "12") {
      hour = "00";
    }
    
    return `${hour.toString().padStart(2, "0")}:${minute}:00`;
  };

  // Convert "1 Person" to number 1
  const parseGuests = (guestStr) => {
    const match = guestStr.match(/\d+/);
    return match ? parseInt(match[0]) : 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      // Prepare data for API
      const apiData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        start_time: formatTime(formData.start_time),
        end_time: formatTime(formData.end_time),
        number_of_guests: parseGuests(formData.number_of_guests),
        special_requests: formData.special_requests || null,
      };

      // Validate required fields
      if (!apiData.date) {
        throw new Error("Please select a date");
      }

      // Call Django API
      const response = await reservationAPI.createReservation(apiData);
      
      setMessage({
        text: `Reservation submitted successfully.`,
        type: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        start_time: "11:00am",
        end_time: "12:00pm",
        number_of_guests: "1 Person",
        special_requests: "",
      });

    } catch (error) {
      console.error("Reservation error:", error);
      
      let errorMessage = "Failed to create reservation. ";
      
      if (error.response) {
        // Django validation errors
        if (error.response.data) {
          const errors = Object.values(error.response.data).flat();
          errorMessage += errors.join(", ");
        } else {
          errorMessage += error.response.statusText;
        }
      } else if (error.request) {
        errorMessage += "Network error. Please check your connection.";
      } else {
        errorMessage += error.message;
      }
      
      setMessage({
        text: errorMessage,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section
        className="h-[75vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center flex-col justify-center">
          <h1 className="text-4xl font-bold">RESERVATION</h1>
          <p className="mt-4 text-gray-300">
            FOR BANQUET , PLEASE CALL OUR DIRECT BANQUET LINE AT +234 813 499 5529
          </p>
        </div>
      </section>

      {/* Header */}
      <div className="bg-white min-h-screen flex flex-col items-center py-16 px-6 md:px-20 text-black">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-widest text-sm mb-2">
            — Online Reservation —
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
            Book a Table
          </h1>
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={`w-full max-w-5xl mb-6 p-4 rounded-md ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl bg-white space-y-6"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                disabled={loading}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date*
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]} // Today's date
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From When*
              </label>
              <select
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                disabled={loading}
              >
                <option value="11:00am">11:00am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="3:00pm">3:00pm</option>
                <option value="4:00pm">4:00pm</option>
                <option value="5:00pm">5:00pm</option>
                <option value="6:00pm">6:00pm</option>
                <option value="7:00pm">7:00pm</option>
                <option value="8:00pm">8:00pm</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Until*
              </label>
              <select
                name="end_time"
                value={formData.end_time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                disabled={loading}
              >
                <option value="11:00am">11:00am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="3:00pm">3:00pm</option>
                <option value="4:00pm">4:00pm</option>
                <option value="5:00pm">5:00pm</option>
                <option value="6:00pm">6:00pm</option>
                <option value="7:00pm">7:00pm</option>
                <option value="8:00pm">8:00pm</option>
                <option value="9:00pm">9:00pm</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How Many People are coming?*
              </label>
              <select
                name="number_of_guests"
                value={formData.number_of_guests}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                disabled={loading}
              >
                <option value="">Select number of guests</option>
                <option value="1 Person">1 Person</option>
                <option value="2 People">2 People</option>
                <option value="3 People">3 People</option>
                <option value="4 People">4 People</option>
                <option value="5 People">5 People</option>
                <option value="6+ People">6+ People</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              name="special_requests"
              value={formData.special_requests}
              onChange={handleChange}
              rows="4"
              placeholder="Write any special request here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
              disabled={loading}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-red-500 text-white px-8 py-3 rounded-md uppercase tracking-widest text-sm hover:bg-red-600 transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Processing..." : "Book Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}