import Features from "../SubPages/For Landing Page/Features";
import Community from "../SubPages/For Landing Page/Community";
import Hero from "../SubPages/For Landing Page/Hero";
import LandingNav from "../SubPages/For Landing Page/LandingNav";

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
