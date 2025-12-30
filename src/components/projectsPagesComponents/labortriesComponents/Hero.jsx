import React from "react";

const LabortriesHero = () => {
  return (
    <section
      className="relative w-full h-[80vh] md:h-screen flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-white text-4xl md:text-7xl font-bold tracking-[0.2em] uppercase mb-6 leading-tight">
          Research <br /> Facilities
        </h1>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-gray-200 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          State-of-the-art laboratories designed for precision, innovation, and
          cutting-edge scientific research.
        </p>
      </div>
    </section>
  );
};

export default LabortriesHero;
