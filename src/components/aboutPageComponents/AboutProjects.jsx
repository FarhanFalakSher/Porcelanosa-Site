import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

function AboutProjects() {
  const allCards = [
    {
      bgImgURL: "https://picsum.photos/600/400?random=1",
      discription:
        "Pantone 2026 Cloud Dancer: the timeless white that will define interiors and exteriors next year",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=2",
      discription:
        "JW Design Studio: design, material and calm for an office in China",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=3",
      discription:
        "Maison Le Sommet, essential architecture and contemporary exclusivity in the heart of Seoul",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=4",
      discription:
        "La Primavera: a Chilean house where the architecture speaks for itself",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=5",
      discription:
        "Inside Pharmacy designs a new concept for the Lourdes Segarra Pharmacy",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=6",
      discription:
        "Architecture in Motion: the Sculpted Lightness of Krion® Lux",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=7",
      discription:
        "Hotel Bardo Savannah: from historic mansion to icon of contemporary hospitality",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=8",
      discription: "Viola House, when memory becomes matter",
    },
  ];

  // Index based state (0 to 7)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f4f4f4] py-16 md:py-20 w-full overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-[65%_35%] items-end mb-10">
        <div>
          <h1 className="text-[#2d3748] text-3xl md:text-4xl font-light mb-4">
            PORCELANOSA projects
          </h1>
          <p className="text-[#939fba] text-base leading-relaxed max-w-2xl">
            Discover new projects made with PORCELANOSA products
          </p>
        </div>

        {/* Laptop Buttons Only */}
        <div className="hidden lg:flex justify-end mt-6 lg:mt-0">
          <div className="flex items-center border border-gray-300 bg-white overflow-hidden">
            <button
              onClick={() => setActiveIndex(0)}
              disabled={activeIndex === 0}
              className={`p-5 transition ${
                activeIndex === 0
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-px h-10 bg-gray-200"></div>
            <button
              onClick={() => setActiveIndex(4)}
              disabled={activeIndex === 4}
              className={`p-5 transition ${
                activeIndex === 4
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="slider-container relative w-full">
        <ProjectCard
          data={allCards}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
}

export default AboutProjects;
