import React from "react";

import { FaInstagram, FaViber } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="hidden xl:flex font-semibold">
      <ul className="flex gap-x-4 ">
        <li>
          <a
            href="https://www.instagram.com/photographer_anna_vilkova/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram - Photographer Anna Vilkova"
          >
            <FaInstagram aria-hidden="true" />
            <span className="sr-only">
              Instagram - Photographer Anna Vilkova
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.viber.com"
            aria-label="Viber"
            target="_blank"
            rel="noreferrer"
          >
            <FaViber aria-hidden="true" />{" "}
            <span className="sr-only">Viber</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
