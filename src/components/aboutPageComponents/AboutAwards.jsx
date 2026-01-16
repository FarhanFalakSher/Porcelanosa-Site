import { FiAward, FiStar } from "react-icons/fi";

function AboutAwards() {
  return (
    <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?auto=format&fit=crop&w=1920')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Animated floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-[85%] md:w-[65%] mx-auto text-center px-4">
        {/* Award icons */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-60" />
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-full border-2 border-white/30 shadow-2xl">
              <FiAward className="text-white text-3xl" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-lg opacity-60" />
            <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 p-4 rounded-full border-2 border-white/30 shadow-2xl">
              <FiStar className="text-white text-3xl" />
            </div>
          </div>
        </div>

        {/* Main heading with gradient text */}
        <h2 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 drop-shadow-2xl">
          Awards <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">&</span> Recognitions
        </h2>
        
        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Our commitment to quality and innovation has been recognized globally,
          earning us prestigious awards in design, sustainability, and
          architecture over the years.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="text-center">
            <div className="text-4xl font-bold text-white drop-shadow-lg">25+</div>
            <div className="text-cyan-200 text-sm tracking-wider">International Awards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white drop-shadow-lg">45+</div>
            <div className="text-cyan-200 text-sm tracking-wider">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white drop-shadow-lg">150+</div>
            <div className="text-cyan-200 text-sm tracking-wider">Countries</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

export default AboutAwards;