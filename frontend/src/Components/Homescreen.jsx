import React from "react";
import { Link } from "react-router-dom";


function HomeScreen() {
  return (
    <div className="bg-[#fffaf0] text-gray-900 font-serif overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section
        className="h-[75vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold text-center ">
            Welcome to Avora
          </h1>
          <p className="mt-5  text-gray-300 font-sans">THE FINEST CUISINES. EXQUISITE WINES. GENUINE SERVICES</p>
        </div>
      </section>

      {/* another section */}
      <section className="bg-[#fffbea] py-16 px-4 md:px-12 lg:px-20 text-center">
        <h3 className="text-red-500 text-sm tracking-widest mb-3">— WELCOME —</h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8">
          A Journey to Palate
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80"
            alt="Dish 1"
            className="rounded-md shadow-md mx-auto w-[250px] h-[250px] object-cover"
          />

          <p className="text-gray-700 text-base md:text-lg leading-relaxed px-2 md:px-0">
            The cuisines at Avora Place are influenced by the rich and diverse flavors of
            Afro fusion, enhanced by global culinary traditions. It’s an elegant yet lively
            place to dine with African-inspired art and vibrant décor. You’ll have your taste
            buds tantalized as you enjoy great food and remarkable drinks you’ll never forget.
          </p>

          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
            alt="Dish 2"
            className="rounded-md shadow-md mx-auto w-[250px] h-[250px] object-cover"
          />
        </div>
        <Link to='/menu'>
        <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition cursor-pointer">
          CHECK OUR MENU
        </button>
        </Link>
        
      </section>

      {/* ===== MENU ICONS SECTION ===== */}
      {/* <section
        className="bg-cover bg-center py-14 md:py-20 px-4 text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/60 py-10 rounded-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", label: "Lunch Menu" },
              { icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", label: "Dinner Menu" },
              { icon: "https://cdn-icons-png.flaticon.com/512/2738/2738894.png", label: "Wines & Cocktails" },
              { icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", label: "Snacks Menu" },
              { icon: "https://cdn-icons-png.flaticon.com/512/2909/2909765.png", label: "Desserts Menu" },
            ].map((item, index) => (
              <div key={index}>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="mx-auto mb-3 w-8 sm:w-10"
                />
                <p className="uppercase text-xs sm:text-sm tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

             {/* SECTION 3 */}
      <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug mb-6">
              Our goal is to give your taste buds the
              <span className="text-red-600"> experience of a lifetime.</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              We aim at celebrating the unique food customs from different regions in Africa;
              as a result, there will be a global taste at the same time.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-3">
              Avora is a combination of our love for quality African and global foods, family
              traditions, and rich eatery know-how. Each meal at our place is consumed after
              years of dedication to delicious meals.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              Our team will work with you to create a customized dining experience that suits
              your preferences. Whether it’s a celebration or business meeting, we ensure every
              detail is perfect — from the ambiance to the food.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="Brisa goal"
              className="rounded-md shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section
        className="relative h-[200px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80')",
        }}
      >
        <div className="bg-black/50 w-full h-[200px] flex flex-col items-center justify-center text-center text-white px-4">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif italic">The Best</h3>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold ">
            Experience
          </h1>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-red-500 text-xs uppercase tracking-widest mb-2">
              — Behind the Scenes —
            </h4>
            <h2 className="text-2xl sm:text-3xl font-serif mb-4">Our Ambiance</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              The ambience is aimed towards giving you a feel of Akwa Ibom State. It welcomes
              you with cozy warm colors and traditional art most suitable for any dining
              experience. Whether it’s a family gathering, a date, or meeting friends after
              work, the ambiance speaks one language: comfort.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="Brisa Ambience"
              className="rounded-md shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen 