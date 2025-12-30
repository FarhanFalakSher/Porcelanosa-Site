import AboutHero from "../components/aboutPageComponents/AboutHero";
import CurrentURL from "../components/aboutPageComponents/CurrentURL";
import CompaniesUnitySection from "../components/aboutPageComponents/CompaniesUnitySection";
import LargeMultinational from "../components/aboutPageComponents/LargeMultinational";
import GroupThroughScreen from "../components/aboutPageComponents/GroupThroughScreen";
import AboutAwards from "../components/aboutPageComponents/AboutAwards";
import AboutShowrooms from "../components/aboutPageComponents/AboutShowrooms";
import AboutProjects from "../components/aboutPageComponents/AboutProjects";

function AboutGroupPage() {
  return (
    <>
      <div>
        <AboutHero />
        <CurrentURL />
        <CompaniesUnitySection />
        <LargeMultinational />
        <GroupThroughScreen />
        <AboutAwards />
        <AboutProjects />
        <AboutShowrooms />
      </div>
    </>
  );
}

export default AboutGroupPage;
