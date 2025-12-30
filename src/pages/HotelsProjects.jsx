import HotelsHero from "../components/projectsPagesComponents/hotelComponents/Hero";
import HotelsList from "../components/projectsPagesComponents/hotelComponents/List";

const Hotels = () => {
  return (
    <main className="min-h-screen bg-white">
      <HotelsHero />
      <HotelsList />
    </main>
  );
};

export default Hotels;
