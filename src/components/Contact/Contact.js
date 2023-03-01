import React, { useState } from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const Contact = () => {
  const formInitial = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(formInitial);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormValues({
      ...formValues,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    setButtonText("Sending...");
    console.log({ formValues });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      });
    // let result = response.json();
    // setFormValues(formInitial);
    // if (result.code === 200) {
    //   setStatus({ success: true, message: "Message sent successfully" });
    // } else {
    //   setStatus({ success: false, message: "Something went wrong" });
    // }
  };

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
            onSubmit={handleSubmit}
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
              value={formValues.name}
              onChange={(e) => onFormUpdate("name", e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              className="bg-transparent border-b py-1 mb-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              value={formValues.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              id="message"
              name="message"
              value={formValues.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
            ></textarea>
            <button className="btn btn-lg">{buttonText}</button>
            {status.message && <div>{status.message}</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
