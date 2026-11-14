import React from "react";

export default function Menu() {
  return (
    <div>
      <section
        className="h-[75vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold ">MENU</h1>
          <p className="mt-4 text-gray-300">COME AND TASTE OUR DELICACIES</p>
        </div>
      </section>

      <div className="bg-white text-black px-4 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          {/* 3 Menu Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Appetizers */}
            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80')",
                }}
              >
                Appetizers
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Suya Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Coleslaw</span>
                  <span>₦3,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Hot Wings</span>
                  <span>₦7,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Samosa</span>
                  <span>₦5,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Sandwich</span>
                  <span>₦10,999</span>
                </li>
              </ul>
            </div>

            {/* Avora Veggie Medley Soup */}
            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80')",
                }}
              >
                Avora Veggie Medley Soup
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Chicken Mushroom Soup</span>
                  <span>₦14,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Coastal Shrimp Chowder</span>
                  <span>₦14,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Ministry Soup</span>
                  <span>₦11,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Sweet Corn Soup</span>
                  <span>₦12,999</span>
                </li>
              </ul>
            </div>

            {/* Grills */}
            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://plus.unsplash.com/premium_photo-1693221705557-31b58c203e64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxzfGVufDB8fDB8fHww')",
                }}
              >
                Grills
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Chargrilled Butterfly King Prawns</span>
                  <span>₦25,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Grilled Turkey Wing</span>
                  <span>₦11,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Peppered Gizzard</span>
                  <span>₦8,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Peppered Snail</span>
                  <span>₦7,999</span>
                </li>
                <li className="flex justify-between">
                  <span>T-Bone Steak</span>
                  <span>₦13,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Whole Grilled Fish</span>
                  <span>₦16,999</span>
                </li>
              </ul>
            </div>

            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1707449133703-a6c00a244b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhdHRlcnN8ZW58MHx8MHx8fDA%3D')",
                }}
              >
                Platters
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Suya Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Coleslaw</span>
                  <span>₦3,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Hot Wings</span>
                  <span>₦7,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Samosa</span>
                  <span>₦5,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Sandwich</span>
                  <span>₦10,999</span>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1733414717515-d997dafb7341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZSUyMHNwZWNpYWxpdGllc3xlbnwwfHwwfHx8MA%3D%3D')",
                }}
              >
                Rice Specialties
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Suya Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Coleslaw</span>
                  <span>₦3,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Hot Wings</span>
                  <span>₦7,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Samosa</span>
                  <span>₦5,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Sandwich</span>
                  <span>₦10,999</span>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1723408778833-75cde5f11d50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lwJTIwYW5kJTIwcGFpbnR8ZW58MHx8MHx8fDA%3D')",
                }}
              >
                Sip and Paint
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Suya Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Coleslaw</span>
                  <span>₦3,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Hot Wings</span>
                  <span>₦7,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Samosa</span>
                  <span>₦5,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Sandwich</span>
                  <span>₦10,999</span>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlnZXJpYW4lMjBzb3VwfGVufDB8fDB8fHww')",
                }}
              >
                Nigerian soups
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Suya Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Coleslaw</span>
                  <span>₦3,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Hot Wings</span>
                  <span>₦7,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Samosa</span>
                  <span>₦5,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Sandwich</span>
                  <span>₦10,999</span>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="h-28 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWRzfGVufDB8fDB8fHww')",
                }}
              >
                Salads
              </div>

              <ul className="divide-y divide-gray-300 mt-6 space-y-3 text-[15px]">
                <li className="flex justify-between">
                  <span>Suya Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Chicken Salad</span>
                  <span>₦12,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Coleslaw</span>
                  <span>₦3,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Hot Wings</span>
                  <span>₦7,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Samosa</span>
                  <span>₦5,999</span>
                </li>
                <li className="flex justify-between">
                  <span>Sandwich</span>
                  <span>₦10,999</span>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
