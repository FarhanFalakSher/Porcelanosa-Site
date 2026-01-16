import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronRight, FiPhone } from "react-icons/fi";

function AboutHero() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center w-full bg-cover bg-center bg-no-repeat py-14"
      style={{ backgroundImage: "url('/world.jpg')" }}
    >
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      <div className="relative w-full max-w-4xl mx-auto text-center px-6">
        
        {/* Headline - Perfectly Centered */}
        <div className="mb-10" data-aos="fade-up">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            The power of a{" "}
            <span className="text-amber-400 block md:inline mt-2 md:mt-0">Trademark</span>
          </h1>
        </div>

        {/* Description - Perfect Width & Alignment */}
        <div 
          className="mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-gray-100 text-lg md:text-xl leading-relaxed font-light">
            PORCELANOSA Group is today a major reference in both the Spanish and
            international market. Its consolidated position is built on values
            such as innovation, quality, and above all, the trust placed in its
            almost 5,000 skilled professionals, along with a strong commitment to
            stakeholders and the environment.
          </p>
        </div>

        {/* Buttons - Perfectly Aligned */}
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            <span>Learn More</span>
            <FiChevronRight className="mt-0.5" />
          </button>
          <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            <FiPhone />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Stats - Perfectly Aligned & Spaced */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* 45+ Years */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">45+</div>
            <div className="text-gray-300 text-sm md:text-base font-medium uppercase tracking-wider">Years</div>
          </div>
          
          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="block sm:hidden w-12 h-px bg-white/30"></div>
          
          {/* 150+ Countries */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">150+</div>
            <div className="text-gray-300 text-sm md:text-base font-medium uppercase tracking-wider">Countries</div>
          </div>
          
          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="block sm:hidden w-12 h-px bg-white/30"></div>
          
          {/* 5,000+ Professionals */}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">5,000+</div>
            <div className="text-gray-300 text-sm md:text-base font-medium uppercase tracking-wider">Professionals</div>
          </div>
        </div>

      </div>

      {/* Decorative Line */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="w-16 h-0.5 bg-white/40"></div>
      </div>

    </div>
  );
}

export default AboutHero;