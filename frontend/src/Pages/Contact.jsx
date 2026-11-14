import React from "react";

export default function Contact() {
  return (
    <div>
      <section
        className="h-[75vh] md:h-[85vh] bg-cover bg-center flex items justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold">CONTACT</h1>
          <p className="mt-4 text-gray-300">WE'RE EASY TO GET IN TOUCH WITH </p>
        </div>
      </section>

      <div className="bg-white text-black px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 text-gray-800">
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              Our space is located right in the heart of the city. Have
              questions, feedback, or special requests? We’d love to hear from
              you. We value our guests and strive to provide exceptional service
              every step of the way.
            </p>

            {/* Location */}
            <div>
              <h3 className="text-red-600 font-semibold uppercase tracking-wide mb-1">
                — Location —
              </h3>
              <p>House 31 C Line, Ewet Housing Estate, Uyo 520101, Akwa Ibom</p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-red-600 font-semibold uppercase tracking-wide mb-1">
                — Contact —
              </h3>
              <p>+234 707 7388 878</p>
              <a
                href="mailto:Avoracompanies@gmail.com"
                className="text-red-500 hover:underline"
              >
                info@avoranigeria.com
              </a>
            </div>

            {/* Restaurant Hours */}
            <div>
              <h3 className="text-red-600 font-semibold uppercase tracking-wide mb-1">
                — Restaurant Hours —
              </h3>
              <p>Monday - Sunday:</p>
              <p>Brunch: 10:00 AM - 12:00 PM</p>
              <p>Lunch: 12:00 PM - 2:30 PM</p>
              <p>Dinner: 5:00 PM - 11:00 PM</p>
              <p className="mt-2">
                Bar Hours: Open daily until the last guest leaves
              </p>
            </div>
          </div>

          {/* Right Section - Google Map */}
          <div className="md:w-1/2 w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Avora Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2278260401115!2d7.920851973729196!3d5.033419038337822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d5859ad2ff16b%3A0xb30c3c81bb00792b!2sBrisa%20Place!5e0!3m2!1sen!2sng!4v1716538000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
