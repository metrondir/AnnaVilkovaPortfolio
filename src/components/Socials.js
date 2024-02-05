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
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-5">
        <li>
          <a
            href="https://www.instagram.com/photographer_anna_vilkova/"
            target="_blank"
          >
            {" "}
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.viber.com" target="_blank">
            <FaViber />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/photographerannaivanova14"
            target="_blank"
          >
            {" "}
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com" target="_blank">
            {" "}
            <FaPinterest />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank">
            {" "}
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            {" "}
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
