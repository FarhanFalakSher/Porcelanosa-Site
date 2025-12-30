import PublicPlacesHero from "../components/projectsPagesComponents/publicPlacesComponents/Hero";
import PublicPlacesList from "../components/projectsPagesComponents/publicPlacesComponents/List";

const PublicPlaces = () => {
  return (
    <main className="min-h-screen bg-white">
      <PublicPlacesHero />
      <PublicPlacesList />
    </main>
  );
};

export default PublicPlaces;
