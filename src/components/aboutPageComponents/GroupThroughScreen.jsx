import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GTSCard from "./GTSCard";

function GroupThroughScreen() {
  const allCards = [
    {
      bgImgURL: "https://picsum.photos/600/400?random=1",
      heading:"LANTIC COLONIAL"
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=2",
      heading:"BUTECH"
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=3",
      heading:"NOKEN"
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=4",
      heading:"XTONE"
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=5",
      heading:"POCELANOSA"
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=6",
      heading:"XLIGHT"
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=7",
      heading:"GAMADECOR"
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=8",
      heading:"KRION"
    },
  ];

  // Index based state (0 to 7)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f4f4f4] py-16 md:py-20 w-full overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-[65%_35%] items-end mb-10">
        <div>
          <h1 className="text-[#2d3748] text-3xl md:text-4xl font-light mb-4">
            Explore PORCELANOSA Grupo through the screen and a virtual tour 360°
          </h1>
          <p className="text-[#939fba] text-base leading-relaxed max-w-2xl">
            Knowing the importance of new technologies in such a competitive
            sector such as architecture and interior design, the firm
            PORCELANOSA Grupo uses them once again to offer a full tour of its
            main facilities. Thus, it is possible to see, with one click and 360
            degrees, some of its most innovative and sophisticated showrooms.
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
        <GTSCard
          data={allCards}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
}

export default GroupThroughScreen;
