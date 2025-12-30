import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/publicPlacesComponents/Discription";
import PublicPlacesHero from "../components/projectsPagesComponents/publicPlacesComponents/Hero";
import PublicPlacesList from "../components/projectsPagesComponents/publicPlacesComponents/List";

const PublicPlaces = () => {
  return (
    <main className="min-h-screen bg-white">
      <PublicPlacesHero />
      <PublicPlacesList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default PublicPlaces;
