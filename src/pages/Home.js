import React, { useContext, useRef } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import AnnaImage from "../img/home/AnnaImage.jpg";
import handleScroll from "../utils/handleScroll";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

import { CursorContext } from "../context/CursorContext";
import { transition1 } from "../transitions";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section cursor-none h-screen overflow-y-auto bg-gradient-to-r from-neutral-600 to-gray-200"
    >
      <Header
        homeRef={homeRef}
        portfolioRef={portfolioRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} className="container mx-auto h-full relative">
        <div className=" flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            transition={transition1}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">Фотограф</h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Николаев , Украина
            </p>
            <Link
              to={"/#contact"}
              className="btn mb-[30px]"
              onClick={() => {
                handleScroll(contactRef.current);
              }}
            >
              Связаться со мной{" "}
            </Link>
          </motion.div>
          <div className="flex justify-end lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative lg:left-40"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={AnnaImage}
                alt=" "
              />
            </motion.div>
          </div>
        </div>

        <div ref={portfolioRef}>
          <Portfolio contactRef={contactRef} />
        </div>
        <div ref={aboutRef}>
          <About portfolioRef={portfolioRef} />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
