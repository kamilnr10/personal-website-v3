import React from "react";
import woi from "../../assets/woi_grouped.gif";
import ir from "../../assets/wo_issue_from_ir.gif";
import woistatic from "../../assets/woi_static.png";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section id="work" className="section h-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10">
          <div className="flex flex-col md:flex-row gap-x-12 mb-12">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=""
            >
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-md mb-16">
                Lorem isdfps sdfs fnsd gfd gso dsnf s sdfno sd sfosdfnsf s sdgf
                apsoqwe ncz aps asada qwqinais ans a kasn aoas nda
              </p>
              <button className="btn btn-sm">View all projects</button>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="relative grayscale scale-90 brightness-50 hover:grayscale-0 hover:brightness-100 group-hover:scale-100 transition-all duration-500">
                <img className="" src={woi} />
                <img
                  className="absolute top-0 left-0 hover:opacity-0"
                  src={woistatic}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50 text-gradient drop-shadow-lg font-semibold">
                  <p className="font-bold">SuiteScript</p>
                  <p className="text-accent font-light">
                    Work Order Issue from Item Receipt
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-y-12"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="relative grayscale scale-90 brightness-50 hover:grayscale-0 hover:brightness-100 group-hover:scale-100 transition-all duration-500">
                <img className="" src={woi} />
                <img
                  className="absolute top-0 left-0 hover:opacity-0"
                  src={woistatic}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50 text-gradient drop-shadow-lg font-semibold">
                  <p className="font-bold">SuiteScript</p>
                  <p className="text-accent font-light">
                    Work Order Issue from Item Receipt
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="relative grayscale scale-90 brightness-50 hover:grayscale-0 hover:brightness-100 group-hover:scale-100 transition-all duration-500">
                <img className="" src={woi} />
                <img
                  className="absolute top-0 left-0 hover:opacity-0"
                  src={woistatic}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50 text-gradient drop-shadow-lg font-semibold">
                  <p className="font-bold">SuiteScript</p>
                  <p className="text-accent font-light">
                    Work Order Issue from Item Receipt
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="relative grayscale scale-90 brightness-50 hover:grayscale-0 hover:brightness-100 group-hover:scale-100 transition-all duration-500">
                <img className="" src={woi} />
                <img
                  className="absolute top-0 left-0 hover:opacity-0"
                  src={woistatic}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50 text-gradient drop-shadow-lg font-semibold">
                  <p className="font-bold">SuiteScript</p>
                  <p className="text-accent font-light">
                    Work Order Issue from Item Receipt
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl flex-1">
              <div className="relative grayscale scale-90 brightness-50 hover:grayscale-0 hover:brightness-100 group-hover:scale-100 transition-all duration-500">
                <img className="" src={woi} />
                <img
                  className="absolute top-0 left-0 hover:opacity-0"
                  src={woistatic}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50 text-gradient drop-shadow-lg font-semibold">
                  <p className="font-bold">SuiteScript</p>
                  <p className="text-accent font-light">
                    Work Order Issue from Item Receipt
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
