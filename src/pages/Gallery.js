import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Gallery = () => {
  return (
    <motion.section
      className="section bg-white"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    ></motion.section>
  );
};

export default Gallery;
