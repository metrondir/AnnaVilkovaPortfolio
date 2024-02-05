import React, { useContext } from "react";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

import AnnaImage from "../img/contact/Anna.JPG";
import { CursorContext } from "../context/CursorContext";
const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      className="section bg-white"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 rifgt-0 top-72 z-10"
          ></motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                  font-secondary w-full pl-3
                  placeholder:text-[#757879]"
                  placeholder="Your name"
                  type="text"
                ></input>
                <input
                  className="outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                  font-secondary w-full pl-3
                  placeholder:text-[#757879]"
                  placeholder="Your email address"
                  type="text"
                ></input>
              </div>
              <input
                className="outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                  font-secondary w-full pl-3
                  placeholder:text-[#757879]"
                placeholder="Your message"
                type="text"
              ></input>
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                {" "}
                Send it
              </button>
            </form>
          </div>
          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
          >
            <img src={AnnaImage} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
