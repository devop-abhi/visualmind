import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import PopularTopics from "../components/PopularTopics";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import EngineeringDomains from "../components/EngineeringDomains";

const Home = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />

      {/* Search Section */}
      <section className="py-4">
        <SearchBox />
      </section>

      <PopularTopics />
      <Features /> 
      <HowItWorks />
      <Stats/>
      <EngineeringDomains />
    </>
  );
};

export default Home;