import React from "react";
import Pic from "../assets/food.jpg";

export default function About() {
  return (
    <div className="text-black bg-white">
      {/* Hero Section */}
      <section
        className="h-[60vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
       <div className="bg-black/50 w-full h-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
          <p className="mt-4 text-gray-300">WE ARE EASY TO REACH +234 813 499 5529</p>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Preserving Decades of Rich Traditions
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto mb-3">
          Avora has brought together our passion for quality African and
          intercontinental dishes, family values, and seasoned restaurant
          experience.
        </p>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Every time you dine with us, you're tasting years of hard work,
          innovation, and commitment to great food.
        </p>
      </section>

      {/* Image Section */}
      <section className="flex justify-center px-6 md:px-20 pb-10">
        <img
          src={Pic}
          alt="Delicious Food"
          className="w-full md:w-[500px] h-[400px] object-cover"
        />
      </section>

      {/* Description Section */}
      <section className="px-6 md:px-20 pb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-base leading-relaxed">
          <p>
            Avora is a blend of our love for authentic African and global
            cuisines, family traditions, and rich culinary expertise. Each meal
            represents years of passion, creativity, and dedication to serving
            delicious food made with love.
          </p>
          <p>
            Our goal is to give your taste buds the experience of a lifetime.
            We proudly celebrate diverse food traditions across Africa while
            incorporating global flavors that bring people together.
          </p>
        </div>
      </section>
    </div>
  );
}
