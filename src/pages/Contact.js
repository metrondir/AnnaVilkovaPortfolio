import React, { useContext, useState } from "react";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

import AnnaImage from "../img/contact/AnnaImage.jpg";
import { CursorContext } from "../context/CursorContext";
const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col lg:flex-row h-full items-center justify-center pt-36 gap-16 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 rifgt-0 top-72 z-10"
        ></motion.div>
        <div
          className="lg:flex-1 lg:pt-32 px-4"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <h1 className="h1 text-center">Связаться со мной</h1>

          <div className="flex flex-col my-12">
            <div className="flex gap-x-32">
              <button
                className="outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                  font-secondary w-full pl-3
                  placeholder:text-[#757879]"
              >
                <a
                  href="https://www.instagram.com/photographer_anna_vilkova/"
                  target="_blank"
                >
                  Instagram
                </a>
              </button>
              <input
                className="outline-none border-b
                  border-b-primary h-[60px] bg-transparent
                   font-secondary w-full pl-12
                  placeholder:text-[#757879]"
                disabled
                defaultValue={"+380962879050"}
              ></input>
            </div>
            <input
              className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-48  placeholder:text-[#757879]"
              disabled
              defaultValue={"Здесь неякой контакт"}
              type="text"
            ></input>
          </div>
        </div>
        <motion.div
          className="lg:flex-1 gap"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ transition: transition1, duration: 1.5 }}
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={transition1}
            src={AnnaImage}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
