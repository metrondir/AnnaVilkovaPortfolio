import React, { useEffect, useState, createContext } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  }, [mobileViewportIsActive]);

  const cursorVariants = {
    default: {
      cursor: "none",
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },

    none: {
      width: 0,
      height: 0,
      backgroundColor: "#ffffff",
    },
  };

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
