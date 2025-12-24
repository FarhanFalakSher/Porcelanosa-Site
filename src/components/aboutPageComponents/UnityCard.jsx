const UnityCard = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <div className="relative">
      <div className="slick-list overflow-hidden relative block px-4 md:px-8 lg:px-0">
        <div
          className="slick-track flex transition-transform duration-700 ease-in-out"
          style={{
            // CSS Variables for Responsive Offset
            // Mobile: Move 100% per card
            // Tablet: Move 50% per card
            // Laptop: Move 25% per card
            transform: `translateX(calc(-1 * var(--slide-width) * ${activeIndex}))`,
          }}
        >
          {/* CSS custom properties for different screens */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .slick-track { --slide-width: 100%; }
            @media (min-width: 768px) { .slick-track { --slide-width: 50%; } }
            @media (min-width: 1024px) { .slick-track { --slide-width: 25%; } }
          `,
            }}
          />

          {data.map((item, i) => (
            <div
              key={i}
              className="px-2 md:px-3 lg:px-4 w-full md:w-1/2 lg:w-1/4 shrink-0"
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots - Hidden on Laptop (lg:hidden) */}
      <div className="flex justify-center gap-2 mt-10 lg:hidden">
        {/* Tablet: 2 cards at a time, so 4 sets (0, 2, 4, 6) */}
        <div className="hidden md:flex gap-2">
          {[0, 2, 4, 6].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === idx ? "bg-gray-800 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Mobile: 1 card at a time, so 8 dots (0 to 7) */}
        <div className="flex md:hidden gap-2">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === idx ? "bg-gray-800 w-5" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ item }) => (
  <div className="flex flex-col w-full">
    <div className="relative aspect-4/5 md:aspect-5/4 overflow-hidden bg-gray-200">
      <img src={item.bgImgURL} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        <h2 className="text-white text-5xl md:text-6xl font-serif opacity-90">
          {item.year}
        </h2>
      </div>
    </div>
    <div className="mt-5">
      <p className="text-[#939fba] text-sm leading-relaxed text-justify">
        <strong className="text-gray-700 uppercase mr-1 font-bold">
          Noken
        </strong>
        {item.discription}
      </p>
      <button className="mt-3 text-xs font-bold text-gray-400 uppercase  tracking-widest hover:text-black">
        Know more...
      </button>
    </div>
  </div>
);

export default UnityCard;
