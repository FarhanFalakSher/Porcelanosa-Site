import { useState, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlayCircle,
  FiMaximize2,
  FiEye,
} from "react-icons/fi";

// Local Images
import lanticImg from "../../assets/lantic.jpg";
import butechImg from "../../assets/BuTech.jpg";
import nokenImg from "../../assets/noken.jpg";
import xtoneImg from "../../assets/xtone.jpg";
import porcelanosaImg from "../../assets/porcelanosa.jpg";
import xlightImg from "../../assets/xlight.avif";
import gamadecorImg from "../../assets/gamadecor.jpg";
import krionImg from "../../assets/krion.jpg";

function GroupThroughScreen() {
  const cards = [
    {
      bgImgURL: lanticImg,
      heading: "L'ANTIC COLONIAL",
      color: "from-blue-50 to-white",
      accent: "bg-blue-700",
    },
    {
      bgImgURL: butechImg,
      heading: "BUTECH",
      color: "from-gray-100 to-white",
      accent: "bg-black",
    },
    {
      bgImgURL: nokenImg,
      heading: "NOKEN",
      color: "from-sky-50 to-white",
      accent: "bg-sky-600",
    },
    {
      bgImgURL: xtoneImg,
      heading: "XTONE",
      color: "from-indigo-50 to-white",
      accent: "bg-indigo-900",
    },
    {
      bgImgURL: porcelanosaImg,
      heading: "PORCELANOSA",
      color: "from-blue-50 to-white",
      accent: "bg-blue-700",
    },
    {
      bgImgURL: xlightImg,
      heading: "XLIGHT",
      color: "from-gray-100 to-white",
      accent: "bg-black",
    },
    {
      bgImgURL: gamadecorImg,
      heading: "GAMADECOR",
      color: "from-sky-50 to-white",
      accent: "bg-sky-600",
    },
    {
      bgImgURL: krionImg,
      heading: "KRION",
      color: "from-indigo-50 to-white",
      accent: "bg-indigo-900",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, cards.length]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setActiveIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4">
            <FiEye className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              VIRTUAL TOUR 360°
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              PORCELANOSA Grupo
            </span>{" "}
            Through Our Showrooms
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our most innovative and sophisticated showrooms with one
            click and 360° immersion.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative mb-8">
          <div
            className={`rounded-3xl overflow-hidden shadow-2xl ${cards[activeIndex].color} transition-all duration-500`}
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url(${cards[activeIndex].bgImgURL})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 right-4 bg-white/90 p-3 rounded-full hover:shadow-lg transition-all"
                >
                  <FiPlayCircle className="w-6 h-6 text-gray-900" />
                </button>

                <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-full">
                  <span className="text-white text-sm">360° TOUR</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {cards[activeIndex].heading}
                </h2>

                <p className="text-gray-600 mb-8">
                  Experience the innovative design and premium quality of our{" "}
                  {cards[activeIndex].heading} collection in immersive 360°
                  detail.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${cards[activeIndex].accent} rounded-lg flex items-center justify-center`}
                    >
                      <FiMaximize2 className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Full Screen</div>
                      <div className="text-sm text-gray-500">360° View</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${cards[activeIndex].accent} rounded-lg flex items-center justify-center`}
                    >
                      <FiEye className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">VR Ready</div>
                      <div className="text-sm text-gray-500">Immersive</div>
                    </div>
                  </div>
                </div>

                <button
                  className={`${cards[activeIndex].accent} text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  Start Virtual Tour <FiPlayCircle />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={prevSlide}
            className="p-3 border rounded-lg hover:bg-gray-100"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 border rounded-lg hover:bg-gray-100"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GroupThroughScreen;
