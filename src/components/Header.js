import React, { useContext } from "react";

import Socials from "./Socials";
import Logo from "../img/header/Logo1.svg";
import handleScroll from "../utils/handleScroll";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
const Header = ({ homeRef, portfolioRef, aboutRef, contactRef }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header
      className="fixed w-full px-[30px] 
  lg:px-[100px] z-30 h-[100px] lg:h-[90px] flex 
  items-center shadow-xl bg-white"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to="/"
          onClick={() => {
            handleScroll(homeRef.current);
          }}
          className="max-w-[200px]"
        >
          <img
            src={Logo}
            alt=""
            className="transform lg:scale-150 sm:scale-20"
          ></img>
        </Link>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex gap-x-12 font-semibold"
        >
          <Link
            to="/"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Главная
          </Link>
          <Link
            to="/#portfolio"
            onClick={() => {
              handleScroll(portfolioRef.current);
            }}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Портфолио
          </Link>
          <Link
            to="/#about"
            onClick={() => {
              handleScroll(aboutRef.current);
            }}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Обо мне
          </Link>
          <Link
            to="/#contact"
            onClick={() => {
              handleScroll(contactRef.current);
            }}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Контакты
          </Link>
        </nav>
        <nav>
          <MobileNav
            homeRef={homeRef}
            portfolioRef={portfolioRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          <Socials />
        </nav>
      </div>
    </header>
  );
};

export default Header;
