import React from "react";

import Socials from "./Socials";
import Logo from "../img/header/Logo1.svg";
import handleScroll from "../utils/handleScroll";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

const Header = ({
  homeRef,
  portfolioRef,
  aboutRef,
  contactRef,
  courseRef,
  priceRef,
}) => {
  return (
    <header
      className="fixed w-full px-[30px] 
  lg:px-[100px]  h-[60px] lg:h-[110px] flex 
  z-20 lg:-ml-4
  items-center shadow-xl bg-white"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between mt-8">
        {}
        <Link
          to="/"
          onClick={() => {
            handleScroll(homeRef.current);
          }}
          className="max-w-[200px] -my-7"
        >
          <img
            src={Logo}
            alt="logo"
            className="transform lg:scale-150 sm:scale-20"
          ></img>
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold opacity: 1; transform: translateY(0%) translateZ(0px);">
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
            to="/gallery"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Галерея
          </Link>
          <Link
            to="/#course"
            onClick={() => {
              handleScroll(courseRef.current);
            }}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Обучения
          </Link>
          <Link
            to="/#price"
            onClick={() => {
              handleScroll(priceRef.current);
            }}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Цены
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
          <Socials />
          <MobileNav
            homeRef={homeRef}
            portfolioRef={portfolioRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
            courseRef={courseRef}
            priceRef={priceRef}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
