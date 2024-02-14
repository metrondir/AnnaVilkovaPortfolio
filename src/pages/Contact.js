import React from "react";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { transition1 } from "../transitions";

import AnnaImage from "../img/contact/AnnaImage.webp";

const Contact = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col lg:flex-row h-full items-center justify-center pt-36 lg:gap-16 gap-3 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 rifgt-0 top-72 z-10"
        ></motion.div>
        <div className="lg:flex-1 lg:pt-32 px-4">
          <h1 className="h1 text-center">Связаться со мной</h1>

          <div className="flex flex-col my-6">
            <div className="flex items-center gap-x-10">
              <a
                href="https://www.instagram.com/photographer_anna_vilkova/"
                target="_blank"
                rel="noreferrer"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent xl:pr-10  pt-1 xl:pl-10 font-secondary w-full cursor-pointer placeholder:text-[#757879] flex items-center"
              >
                <FaInstagram className="ml-4 lg:ml-8" />
                <span className="text-primary font-bold underline text-lg ml-2 lg:ml-2">
                  Instagram
                </span>
              </a>

              <div
                className="outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                   font-secondary w-full text-primary font-bold  xl:pl-8 text-lg
                   pt-5 pl-0 pb-4 cursor-pointer"
              >
                <span className="text-primary font-bold  text-lg   ml-2 lg:ml-2">
                  +380660164694
                </span>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="lg:flex-1"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ transition: transition1, duration: 1.5 }}
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            src={AnnaImage}
            alt="Anna in studio"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
