import React from "react";

const HomeProjectsHero = () => {
  return (
    <section
      className="relative w-full h-[80vh] md:h-screen flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-white text-3xl md:text-5xl font-semibold  mb-6 ">
          Residential Excellence
        </h1>
        
        <p className="text-gray-200 text-lg md:text-2xl   max-w-2xl mx-auto leading-relaxed">
          Discover our global selection of private residences where
          architectural innovation meets timeless luxury.
        </p>
      </div>
    </section>
  );
};

export default HomeProjectsHero;
