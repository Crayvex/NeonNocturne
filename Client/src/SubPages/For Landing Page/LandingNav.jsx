
import { useEffect } from "react";

const LandingNav = () => {
  useEffect(() => {
    const sections = ["Hero", "Features", "Community"];
    const links = {};
    sections.forEach((id) => {
      links[id] = document.querySelector(`#LandingNav .links a[href="#${id}"]`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = links[entry.target.id];
          if (link) {
            if (entry.isIntersecting) {
              // Remove active from all, then set on the intersecting one
              Object.values(links).forEach((l) => l?.classList.remove("active"));
              link.classList.add("active");
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id='LandingNav'>
        <h1>NeonNocturne</h1>
        <div className="links">
            <a href="#Hero">Hero</a>
            <a href="#Features">Features</a>
            <a href="#Community">Community</a>
        </div>
        <a href="/login" className='get-started'>GET STARTED</a>
    </section>
  );
};

export default LandingNav;