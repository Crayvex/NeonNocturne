import Features from "../SubPages/Features";
import Community from "../SubPages/Community";
import Hero from "../SubPages/Hero";
import LandingNav from "../SubPages/LandingNav";

const Landing = () => {
  return (
    <section id="Landing">
      <LandingNav />
      <Hero />
      <Features />
      <Community />
    </section>
  );
};

export default Landing;
