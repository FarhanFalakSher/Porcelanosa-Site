function AboutAwards() {
  return (
    <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-12">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Animated elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[85%] md:w-[60%] mx-auto text-center px-4">
        {/* Decorative element */}
        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-bounce" 
                 style={{ animationDelay: `${i * 200}ms` }} />
          ))}
        </div>

        {/* Heading with shadow */}
        <h2 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide mb-6 drop-shadow-2xl">
          Awards & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Recognitions</span>
        </h2>
        
        {/* Description with gradient border */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25"></div>
          <p className="relative text-white/90 text-lg md:text-xl leading-relaxed p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            Our commitment to quality and innovation has been recognized globally,
            earning us prestigious awards in design, sustainability, and
            architecture over the years.
          </p>
        </div>

        {/* Enhanced button */}
        <button className="group relative px-8 py-4 text-white font-bold text-lg tracking-wider uppercase overflow-hidden rounded-lg transition-all duration-500 hover:shadow-2xl">
          {/* Button background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-500" />
          
          {/* Animated border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-500" />
          
          {/* Button text with icon effect */}
          <span className="relative flex items-center justify-center gap-3">
            <span>FIND YOUR SHOWROOM</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>

        {/* Stats at bottom */}
        <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-white/20">
          {[
            { value: '25+', label: 'Awards' },
            { value: '150+', label: 'Countries' },
            { value: '45+', label: 'Years' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-lg">{stat.value}</div>
              <div className="text-cyan-200/90 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

export default AboutAwards;