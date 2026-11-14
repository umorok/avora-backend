import React from "react";

export default function Apply() {
  return (
    <div>
      <section
        className="h-[75vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/50 flex flex-col h-full w-full items-center justify-center">
          <h1 className="text-4xl font-bold">JOIN OUR TEAM</h1>
          <p className="mt-4 text-gray-300">
            LET'S CREATE REMARKABLE DINING MOMENTS
          </p>
        </div>
      </section>

      <div className="bg-white text-gray-900">
        {/* --- Join the Team Section --- */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left side */}
          <div>
            <p className="text-red-500 uppercase tracking-wider mb-2 text-sm">
              — The Team —
            </p>
            <h2 className="text-3xl font-semibold mb-4">
              Join the Avora Team!
            </h2>
            <p className="mb-4 text-[15px] leading-relaxed">
              Are you passionate about African and intercontinental dishes? Do
              you have experience in the restaurant industry? Avora is looking
              to hire you!
            </p>
            <p className="font-semibold mb-2 text-[15px]">
              We’re currently hiring for the following roles:
            </p>
            <ul className="list-disc pl-5 text-[15px] space-y-1">
              <li>Hostess</li>
              <li>Wait Staff</li>
              <li>Cleaner</li>
              <li>Security</li>
              <li>Bouncer</li>
            </ul>

            {/* Working Email Button */}
            <a
              href="mailto:umorokubong172@gmail.com"
              className="inline-block mt-6 bg-red-500 text-white px-6 py-3 text-sm font-semibold hover:bg-red-700 transition rounded-md"
            >
              EMAIL: HR@AVORANIGERIA.COM
            </a>
          </div>

          {/* Right side image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
              alt="Rolling pin and flour"
              className="rounded-md shadow-md w-full object-cover h-[300px] md:h-[350px]"
            />
          </div>
        </section>

        {/* --- Reservation Section --- */}
        <section className="bg-[#0f2a2f] text-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            {/* Left side info */}
            <div>
              <p className="text-red-400 uppercase text-sm mb-2">
                — Contact Us —
              </p>
              <h2 className="text-3xl font-semibold mb-6">Reservation</h2>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-red-400 mb-1">— Location —</p>
                  <p>
                    House 31 C Line, Ewet Housing Estate, Uyo 520101, Akwa Ibom
                  </p>
                </div>

                <div>
                  <p className="text-red-400 mb-1">— Contact —</p>
                  <p>+234 707 7388 878</p>
                  <p>info@avoranigeria.com</p>
                </div>

                <div>
                  <p className="text-red-400 mb-1">— Open Hours —</p>
                  <p>Monday–Sunday:</p>
                  <p>Brunch: 10:00 AM – 12:00 PM</p>
                  <p>Lunch: 12:00 PM – 2:30 PM</p>
                  <p>Dinner: 5:00 PM – 11:00 PM</p>
                  <p className="mt-2">
                    Bar Hours: Open daily until the last guest leaves
                  </p>
                </div>
              </div>
            </div>

            {/* Right side map */}
            <div className="w-full h-[350px] md:h-[400px]">
              <iframe
                title="Avora Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.383502817939!2d7.935436474994061!3d5.037865239865361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d58e56c4a3b89%3A0xf0e10b172b021c5!2sBrisa%20Place!5e0!3m2!1sen!2sng!4v1697803908725!5m2!1sen!2sng"
                className="w-full h-full rounded-md border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
