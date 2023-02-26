import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import about from "../../assets/about.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 h-[640px] mix-blend-lighten"
          >
            <img className="mx-auto" src={about} alt="programmer" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4 text-[18px] md:text-[24px]">
              I work as a Software Engineer with over 8 months of experience.
              Previously I work as a Netsuite Administrator with over 2 years of
              experience.
            </h3>
            <p className="mb-4">
              I have got just over a seven months of experience as a software
              engineer. In this short period of time I've already contributed to
              over a dozen issues and assisted with one escalation project for
              one of the company's long-time clients.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient py-2">
                  {inView ? <CountUp start={0} end={8} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient py-2">
                  {inView ? <CountUp start={0} end={48} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Issues <br />
                  Resolved
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient py-2">
                  {inView ? <CountUp start={0} end={1} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Escalation <br />
                  Project Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a className="text-gradient btn-link" href="/porfolio">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
