import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-2 mb-14 pb-20 p-6 items-start"
          >
            <label htmlFor="name">Name</label>
            <input
              className="bg-transparent border-b py-1 mb-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
            <label htmlFor="email">Email</label>
            <input
              className="bg-transparent border-b py-1 mb-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              id="message"
              name="message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
