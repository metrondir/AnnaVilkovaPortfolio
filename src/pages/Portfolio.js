import React from "react";

import Image1 from "../img/portfolio/1.webp";
import Image2 from "../img/portfolio/10.webp";
import Image3 from "../img/portfolio/3.webp";
import Image4 from "../img/portfolio/7.webp";
import handleScroll from "../utils/handleScroll";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const Portfolio = ({ contactRef }) => {
  return (
    <div className="container mx-auto h-full relative">
      <div className="flex flex-col h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="flex flex-col lg:items-center"
        >
          <h1 className="h1">Портфолио </h1>
          <h2 className="text-center mb-12 h2 text-lg lg:text-3xl font-medium">
            Фотография - это момент, перед тем <br />
            как он исчезнет
          </h2>
          <Link
            to={"/#contact"}
            className="btn mb-[30px] mx-auto lg:mx-0 "
            onClick={() => {
              handleScroll(contactRef.current);
            }}
          >
            Связаться со мной
          </Link>
        </motion.div>
        <div>
          <div className="grid grid-cols-2 lg:gap-24 gap-4 ">
            <div className="h-[50vh] lg:h-[820px]  overflow-hidden ">
              <img
                className="object-cover h-full   lg:h-[820px] hover:scale-150 transition-all duration-500"
                src={Image1}
                alt="First block"
              />
            </div>
            <div className=" h-[50vh] lg:h-[820px]  overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[820px] hover:scale-150 transition-all duration-500"
                src={Image2}
                alt="Second block"
              />
            </div>
            <div className=" h-[50vh] lg:h-[820px]  overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[820px] hover:scale-150 transition-all duration-500"
                src={Image4}
                alt="Third block"
              />
            </div>
            <div className=" h-[50vh] lg:h-[820px]  overflow-hidden ">
              <img
                className="object-cover h-full lg:h-[820px] hover:scale-150 transition-all duration-500"
                src={Image3}
                alt="Fourth block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
