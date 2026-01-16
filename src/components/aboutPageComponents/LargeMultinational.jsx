import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaExpand, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import corporateVideo from "../../assets/corporate.mp4";
import corporatePoster from "../../assets/corporatePoster.jpg";

const LargeMultinational = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // 🔒 Sync mute with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.muted = isMuted;
        await video.play();
        setIsPlaying(true);
      }
    } catch (e) {
      console.error("Playback blocked", e);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-7 max-w-xl">
            <span className="inline-block px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
              PORCELANOSA GROUP
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              We are a large multinational{" "}
              <span className="text-blue-600">thanks to you</span>
            </h1>

            <p className="text-gray-600 text-lg">
              With over 45 years of innovation, we've grown from a ceramic tile
              manufacturer to a global leader in architectural solutions.
              Our presence in 150+ countries is built on trust, quality,
              and collaborative partnerships.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: "150+", label: "Countries" },
                { value: "970+", label: "Stores" },
                { value: "45+", label: "Years" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl py-4 text-center shadow-sm border"
                >
                  <div className="text-2xl font-bold text-blue-600">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative max-w-xl mx-auto w-full">
            <div
              onClick={handleVideoClick}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => isPlaying && setShowControls(false)}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer"
            >
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                poster={corporatePoster}
                playsInline
                preload="metadata"
                loop
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
              >
                <source src={corporateVideo} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Play Button */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition ${
                  isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">
                  {isPlaying ? (
                    <FaPause className="text-white text-2xl" />
                  ) : (
                    <FaPlay className="text-white text-2xl ml-1" />
                  )}
                </div>
              </div>

              {/* Controls */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 bg-black/70 transition ${
                  showControls ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-1 bg-gray-600 rounded mb-3">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-white">
                  <div className="flex gap-4">
                    <button onClick={handleVideoClick}>
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={toggleMute}>
                      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                  </div>
                  <FaExpand />
                </div>
              </div>

              {/* Label */}
              <span className="absolute top-4 left-4 bg-black/60 text-white text-sm px-4 py-1 rounded-full">
                Corporate Video
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button className="bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition">
            Let's Design the Future Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default LargeMultinational;
