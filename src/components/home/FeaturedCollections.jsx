import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Images
import collection1Img from "../../assets/collection1.jpg";
import collection2Img from "../../assets/collection2.jpg";
import collection3Img from "../../assets/collection3.jpg";

// Collections Data
const collections = [
  {
    name: "Kitchen Masterpieces",
    description:
      "Architecturally inspired kitchens crafted with precision engineering, refined materials, and seamless functionality for modern living.",
    image: collection3Img,
  },
  {
    name: "Bathroom Elegance",
    description:
      "A sophisticated blend of luxury, comfort, and innovation—designed to transform bathrooms into serene, spa-like retreats.",
    image: collection2Img,
  },
  {
    name: "Luxury Tiles",
    description:
      "An exclusive collection of porcelain and ceramic tiles meticulously designed for timeless interiors and architectural excellence.",
    image: collection1Img,
  },
];

const FeaturedCollections = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });
  }, []);

  return (
    <section className="bg-white py-4 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {collections.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col items-center gap-16 lg:flex-row ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div
                data-aos={isEven ? "fade-left" : "fade-right"}
                className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-2xl group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />

                {/* Default Luxury Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-black/10 to-transparent transition-opacity duration-500" />

                {/* Hover Opacity Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content Section */}
              <div
                data-aos="fade-up"
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                <h3 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold  text-gray-800">
                  {item.name}
                </h3>

                <p className="mb-10 max-w-xl text-base md:text-lg leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <button className="inline-flex items-center justify-center rounded-xl border border-gray-900/70 px-5 py-2 text-md  transition-all duration-500 hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-2xl">
                  Explore Collection
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCollections;
