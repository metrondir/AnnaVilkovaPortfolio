import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/carousel";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

import { Card, CardContent } from "../components/card";
import AnnaImage from "../img/about/AnnaImage.webp";
import AnnaImage1 from "../img/home/AnnaImage.webp";
import AnnaImage2 from "../img/contact/AnnaImage.webp";

const Course = () => {
  const imagesCourse = [AnnaImage, AnnaImage1, AnnaImage2, AnnaImage2];
  const infoCourse = [
    "fdsіфвіфвівфіввіфві",
    "sdasіфвфвівфввіфвdadas",
    "sівфівівфівфівadsda",
    "sівфівівфівфівadsda",
  ];
  const headersCourse = [
    "LIGHT ПАКЕТ УСЛУГ",
    "VIP ПАКЕТ УСЛУГ",
    "PRICE LIST",
    "PRICE ДОПОЛНЕНИЕ",
  ];

  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
        className="flex flex-col items-center "
      >
        <h1 className="h1">Обучения </h1>
        <h2 className="text-center mb-12 text-lg lg:text-3xl font-medium">
          Моя задача сделать из вас фотографа
          <br />а не чтобы вы боялись конкуренции
        </h2>
      </motion.div>

      <Carousel
        opts={{
          align: "center",
        }}
      >
        <CarouselContent className="flex flex-col lg:flex-row">
          {imagesCourse.map((image, index) => (
            <CarouselItem key={index} className="pl-2 w-full">
              <div className="relative flex flex-col justify-center items-center">
                <Card>
                  <div className="flex justify-center">
                    <p className="text-black lg:text-lg text-sm font-bold font-primary">
                      {headersCourse[index]}
                    </p>
                  </div>
                  <div className="group">
                    <CardContent className="flex  aspect-square items-center justify-center p-1 relative">
                      <img
                        src={image}
                        alt="courses slider images"
                        className="h-96 mb-4  max-w-[280px] object-cover rounded-3xl transition-opacity duration-300 group-hover:opacity-20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                        <p className="text-black  font-bold  lg:text-md w-[280px] ml-5">
                          {infoCourse[index]}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Course;
