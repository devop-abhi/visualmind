import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import PopularTopics from "../components/PopularTopics";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import EngineeringDomains from "../components/EngineeringDomains";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Home / Hero Section */}
      <section id="home" className="scroll-mt-32">
        <Hero />
      </section>

      {/* Search Section */}
      <section
        id="search"
        className="py-4 scroll-mt-32"
      >
        <SearchBox />
      </section>

      {/* Explore / Popular Topics */}
      <section
        id="explore"
        className="scroll-mt-32"
      >
        <PopularTopics />
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-32"
      >
        <Features />
      </section>

      {/* About / How It Works */}
      <section
        id="about"
        className="scroll-mt-32"
      >
        <HowItWorks />
      </section>

      {/* Engineering Domains */}
      <EngineeringDomains />

      {/* Statistics */}
      <Stats />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;