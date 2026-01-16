import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import header from "../../assets/header.mp4";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover scale-105 animate-heroZoom"
          src={header}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />

        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 lg:px-20">
        <div className="max-w-5xl text-center text-white">
          <h1
            data-aos="fade-up"
            className="mb-6 font-semibold  uppercase text-3xl md:text-5xl lg:text-6xl"
          >
            Luxury Interior Surfaces
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg"
          >
            Timeless aesthetics, exceptional craftsmanship, and refined materials
            designed to elevate modern living spaces.
          </p>

          <div data-aos="fade-up" data-aos-delay="300">
            <button
              className="group relative inline-flex items-center justify-center
              overflow-hidden rounded-xl border border-white/40
              bg-white/10 px-5 py-2 text-md 
              backdrop-blur-md transition-all duration-500
              hover:bg-white hover:text-black hover:shadow-2xl hover:scale-105 font-semibold"
            >
              <span className="relative z-10">Explore Collection</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .animate-heroZoom {
          animation: heroZoom 22s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
