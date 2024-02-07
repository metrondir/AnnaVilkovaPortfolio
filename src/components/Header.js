import React, { useContext } from "react";

import Socials from "./Socials";
import Logo from "../img/header/Logo1.svg";

import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
const Header = () => {
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
          to={"/"}
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
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
        <nav>
          <MobileNav />
          <Socials />
        </nav>
      </div>
    </header>
  );
};

export default Header;
