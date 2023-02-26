import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../variants";
import about from "../../assets/about.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div>
          <div className="flex-1 h-[640px] mix-blend-lighten">
            <img src={about} alt="programmer" />
          </div>
          <div>
            <h2>About me.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
