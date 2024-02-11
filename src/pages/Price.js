import React, { useContext } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/carousel";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import { Card, CardContent } from "../components/card";
import AnnaImage from "../img/about/AnnaImage.jpg";
import AnnaImage1 from "../img/home/AnnaImage.jpg";
import AnnaImage2 from "../img/contact/AnnaImage.jpg";
const Price = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const images = [AnnaImage, AnnaImage1, AnnaImage2, AnnaImage1];
  const info = [
    "fdsіфвіфвівфіввіфві",
    "sdasіфвфвівфввіфвdadas",
    "sівфівівфівфівadsda",
    "sівфівівфівфівadsda",
  ];
  const header = [
    "LIGHT ПАКЕТ УСЛУГ",
    "VIP ПАКЕТ УСЛУГ",
    "PRICE LIST",
    "PRICE ДОПОЛНЕНИЕ",
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
        className="flex flex-col items-center "
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <h1 className="h1">Цены </h1>
        <h2 className="text-center mb-12 h2 text-lg lg:text-3xl font-medium">
          Главний текст для цен <br />
          еще немного текста
        </h2>
      </motion.div>

      <Carousel className="">
        <CarouselContent className="flex flex-col lg:flex-row">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 w-full">
              <div className="relative flex flex-col justify-center items-center">
                <Card>
                  <div className="flex justify-center ">
                    <p className="text-black lg:text-lg text-sm">
                      {header[index]}
                    </p>
                  </div>
                  <div className="group">
                    <CardContent className="flex aspect-square items-center justify-center p-1">
                      <img
                        src={image}
                        alt="s"
                        className="h-96 mb-4 max-w-[280px] object-cover rounded-3xl transition-opacity duration-300 group-hover:opacity-40"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                        <p className="text-white">{info[index]}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Price;
