import HomeProjectsHero from "../components/projectsPagesComponents/homeProjectsComponent/HomeProjectsHero";
import HomeProjectsList from "../components/projectsPagesComponents/homeProjectsComponent/HomeProjectsList";

const HomeProjects = () => {
  return (
    <main className="min-h-screen bg-white">
      <HomeProjectsHero />
      <HomeProjectsList />
    </main>
  );
};

export default HomeProjects;
