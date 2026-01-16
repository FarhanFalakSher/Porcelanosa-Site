import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import tilesImg from "../../assets/tiles.jpg";
import bathroomImg from "../../assets/category.jpg";
import kitchenImg from "../../assets/kitchens.jpg";
import livingImg from "../../assets/living.jpg";

const categories = [
  {
    title: "Tiles",
    description:
      "Innovative ceramic and porcelain tiles crafted for timeless architecture.",
    image: tilesImg,
  },
  {
    title: "Bathroom",
    description:
      "Sophisticated bathroom solutions blending design, comfort, and technology.",
    image: bathroomImg,
  },
  {
    title: "Kitchen",
    description:
      "Contemporary kitchens designed with precision, elegance, and functionality.",
    image: kitchenImg,
  },
  {
    title: "Living Spaces",
    description:
      "Refined surfaces and textures that elevate modern living environments.",
    image: livingImg,
  },
];

const ProductCategories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2
            data-aos="fade-up"
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900"
          >
            Product Categories
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-600"
          >
            Discover a curated selection of architectural surfaces and interior
            spaces designed for refined, modern living.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group relative h-[350px] overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Overlay with Hover Opacity */}
              <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-80 rounded-xl" />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end px-6 py-5">
                <div className="translate-y-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Subtle Luxury Border */}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
