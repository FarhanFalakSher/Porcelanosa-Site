import Pagination from "../components/projectsPagesComponents/commonComponents/Pagination";
import HomeCollection from "../components/projectsPagesComponents/commonComponents/ProjectsHomeCollection";
import Discription from "../components/projectsPagesComponents/homeProjectsComponent/Discription";
import HomeProjectsHero from "../components/projectsPagesComponents/homeProjectsComponent/HomeProjectsHero";
import HomeProjectsList from "../components/projectsPagesComponents/homeProjectsComponent/HomeProjectsList";

const HomeProjects = () => {
  return (
    <main className="min-h-screen bg-white">
      <HomeProjectsHero />
      <HomeProjectsList />
      <Pagination />
      <Discription />
      <HomeCollection/>
    </main>
  );
};

export default HomeProjects;
