import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/healthComponents/Discription";
import HealthProjectsHero from "../components/projectsPagesComponents/healthComponents/Hero";
import HealthProjectsList from "../components/projectsPagesComponents/healthComponents/List";

const HealthProjects = () => {
  return (
    <main className="min-h-screen bg-white">
      <HealthProjectsHero />
      <HealthProjectsList />
      <Pagination />
      <Discription />
      <HomeCollection />
    </main>
  );
};

export default HealthProjects;
