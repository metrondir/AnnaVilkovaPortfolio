import React, { useContext } from "react";

import {
  FaInstagram,
  FaViber,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { CursorContext } from "../context/CursorContext";
const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-auto gap-x-12 font-semibold"
    >
      <ul className="flex gap-x-5">
        <li>
          <a
            href="https://www.instagram.com/photographer_anna_vilkova/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.viber.com" target="_blank" rel="noreferrer">
            <FaViber />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/photographerannaivanova14"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaFacebook />
          </a>
        </li>

        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            {" "}
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
