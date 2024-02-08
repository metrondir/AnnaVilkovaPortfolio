import React, { useState } from "react";
import handleScroll from "../utils/handleScroll";

import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transation: {
      ease: [0.6, 0.01 - 0.05, 0.9],
    },
  },
};

const MobileNav = ({ homeRef, portfolioRef, aboutRef, contactRef }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden flex justify-end items-center ">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {openMenu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-70 z-10"
            onClick={() => setOpenMenu(false)}
          ></div>
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate={openMenu ? "show" : ""}
            className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
          >
            <div
              onClick={() => setOpenMenu(false)}
              className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
            ></div>
            <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
              <li>
                <Link
                  onClick={() => {
                    handleScroll(homeRef.current);
                    setTimeout(() => setOpenMenu(false), 322);
                  }}
                  to={"/"}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleScroll(portfolioRef.current);
                    setTimeout(() => setOpenMenu(false), 322);
                  }}
                  to={"/#portfolio"}
                >
                  Портфолио
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleScroll(aboutRef.current);
                    setTimeout(() => setOpenMenu(false), 322);
                  }}
                  to={"/#about"}
                >
                  Обо мне
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setTimeout(() => setOpenMenu(false), 322);
                  }}
                  to={"/gallery"}
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  to="/#price"
                  onClick={() => {
                    setTimeout(() => setOpenMenu(false), 322);
                  }}
                >
                  Цены
                </Link>
              </li>
              <li>
                <Link
                  to="/#course"
                  onClick={() => {
                    setTimeout(() => setOpenMenu(false), 322);
                  }}
                >
                  Обучения
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleScroll(contactRef.current);
                    setTimeout(() => setOpenMenu(false), 322);
                  }}
                  to={"/#contact"}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default MobileNav;
