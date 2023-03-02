import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import avatar from "../../assets/avatar.png";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import client from "../../sanity";
import { getPageInfo } from "../../api/getApi";

const Banner = ({ info }) => {
  return (
    <div
      id="banner"
      className="h-[calc(100vh-136px)] flex items-center lg:pt-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8 lg:flex-row">
          <div className="flex-1 text-center font-secondary lg:text-left lg:px-4">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[45px] font-bold leading-[0.8] lg:text-[80px]"
            >
              <span>{info.name.toUpperCase()}</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 text-[28px] lg:text-[26px] font-secondary font-semibold uppercase leading-1"
            >
              <span className="">I am a </span>
              <TypeAnimation
                sequence={[
                  "developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Curious Person",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {info.backgroundInformation}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="max-w-max gap-x-6 flex items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="/contact" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="/me">
                <FaYoutube />
              </a>
              <a href="/me">
                <FaGithub />
              </a>
              <a href="/me">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden md:flex animate-waving-hand bg-accent h-[300px] w-[300px] my-[30px] md:my-0 md:w-[570px] md:h-[570px] flex items-center justify-center"
          >
            <img src={avatar} alt="avatar" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
