import React from "react";

const HealthProjectsHero = () => {
  return (
    <section
      className="relative w-full h-[80vh] md:h-screen flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516549655669-df565bc2d4d3?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6">
          Healthcare Innovation
        </h1>
        <p className="text-gray-200 text-lg md:text-2xl  max-w-2xl mx-auto ">
          Advanced healthcare facilities designed for patient wellbeing, medical
          excellence, and healing environments.
        </p>
      </div>
    </section>
  );
};

export default HealthProjectsHero;
