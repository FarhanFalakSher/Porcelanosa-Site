import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/hotelComponents/Discription";
import HotelsHero from "../components/projectsPagesComponents/hotelComponents/Hero";
import HotelsList from "../components/projectsPagesComponents/hotelComponents/List";

const Hotels = () => {
  return (
    <main className="min-h-screen bg-white">
      <HotelsHero />
      <HotelsList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default Hotels;
