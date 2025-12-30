
function AboutAwards() {
  return (
    <div
      className="w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/simple.jpg')" }}
    >
      <div className="w-[80%] md:w-[60%] mx-auto text-center">
        {/* Content based on common Award sections */}
        <h2 className="text-white text-4xl font-bold uppercase tracking-widest">
          Awards and Recognitions
        </h2>
        <p className="text-white pt-4 text-lg">
          Our commitment to quality and innovation has been recognized globally,
          earning us prestigious awards in design, sustainability, and
          architecture over the years.
        </p>
      </div>
    </div>
  );
}

export default AboutAwards;
