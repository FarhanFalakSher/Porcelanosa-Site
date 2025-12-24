import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover scale-110 animate-heroZoom"
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 lg:px-16">
        <div className="max-w-4xl text-center text-white">
          <h1
            data-aos="fade-up"
            className="mb-6 text-3xl font-light tracking-wide md:text-5xl lg:text-6xl"
          >
            Luxury Interior Surfaces
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-auto mb-10 max-w-2xl text-base text-gray-200 md:text-lg"
          >
            Timeless design, exceptional quality, and refined materials crafted
            to transform contemporary living spaces.
          </p>

          <div data-aos="fade-up" data-aos-delay="300">
            <button className="group inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-xl">
              Explore Collection
              <span className="ml-3 inline-block h-px w-8 bg-white transition-all duration-300 group-hover:bg-black group-hover:w-12"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
