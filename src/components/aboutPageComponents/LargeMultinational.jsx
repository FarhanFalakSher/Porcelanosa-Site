import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const LargeMultinational = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play/Pause toggle logic
  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN: TEXT */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[#2d3748] text-2xl md:text-3xl font-light leading-snug">
              We are a large multinational thanks to you. Let's design a future
              together...
            </h2>
          </div>

          {/* RIGHT COLUMN: VIDEO (Zyada Width) */}
          <div
            className="order-1 lg:order-2 relative group cursor-pointer overflow-hidden shadow-2xl"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover aspect-video"
              loop
              muted={false}
              poster="https://picsum.photos/1200/800?grayscale" // Video load hone se pehle cover image
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4" // Yahan apni video file ka path dalen
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* OVERLAY CONTROLS: Mouse click par toggle honge */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-white rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                {isPlaying ? (
                  <FaPause className="text-white text-3xl" />
                ) : (
                  <FaPlay className="text-white text-3xl ml-2" />
                )}
              </div>
            </div>

            {/* PROGRESS BAR (Optional visual aid) */}
            {isPlaying && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300"
                style={{ width: "100%" }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeMultinational;
