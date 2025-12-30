import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 w-full py-10 flex items-center justify-center text-center px-6 lg:px-16">
      <div data-aos="fade-up" className="max-w-3xl">
        <h2 className="text-4xl md:text-4xl lg:text-4xl font-2xl text-gray-900 mb-8 leading-tight">
          Design Your Dream Space
        </h2>
        <p className="text-gray-700 mb-10 text-lg md:text-xl">
          Let’s bring your vision to life with bespoke design solutions and
          premium materials.
        </p>
        <div>
          <button className="rounded-xl border border-gray-900 px-5 py-2 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
