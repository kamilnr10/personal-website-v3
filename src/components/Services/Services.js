import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import person from "../../assets/services.png";

const utilities = [
  {
    name: "React",
    description:
      "React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks. However, React is only concerned with the user interface and rendering components to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
    link: "Learn more",
  },
  {
    name: "SuiteScript",
    description:
      "SuiteScript is the NetSuite platform built on JavaScript that enables complete customisation and automation of business processes. Using the SuiteScript APIs, core business records and user information can be accessed and manipulated via scripts that are executed at pre-defined events.",
    link: "Learn more",
  },
  {
    name: "SQL",
    description:
      "Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values. You can use SQL statements to store, update, remove, search, and retrieve information from the database. You can also use SQL to maintain and optimize database performance.",
    link: "Learn more",
  },
  {
    name: "React Native",
    description:
      "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="relative md:flex-row flex-1 items-center justify-center lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do.</h2>
            <h3 className="h3 mb-16">
              Currently, I work for IFS Industrial and Financial Systems on a
              position of Software Engineer
            </h3>
            <img
              className="hidden md:flex absolute top-0 left-0 md:left-[70px] -z-10 opacity-80"
              src={person}
              alt="frontend-developer"
            />
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-1 items-end justify-center"
          >
            <div>
              {utilities.map((utility, index) => {
                const { name, description, link } = utility;
                return (
                  <div
                    key={index}
                    className="flex border-b border-white/20 mb-[19px] pb-[19px]"
                  >
                    <div className="">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end justify-center">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
