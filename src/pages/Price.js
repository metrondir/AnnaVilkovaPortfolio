import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/carousel";
import { axiosPrivate } from "./axios";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Card, CardContent } from "../components/card";

const Price = (rerender) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("rerender value:", rerender);
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get(
          `${process.env.REACT_APP_API_URL_BACK}/price`
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [rerender]);

  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
        className="flex flex-col items-center "
      >
        <h1 className="h1">Цены </h1>
        <h2 className="text-center mb-12 h2 text-lg lg:text-3xl font-medium">
          Подробная информация о моих услугах
        </h2>
      </motion.div>

      <Carousel
        opts={{
          align: "center",
        }}
      >
        <CarouselContent className="flex flex-col lg:flex-row">
          {data.map((items, index) => (
            <CarouselItem key={index} className="pl-0 w-full">
              <div className="relative flex flex-col justify-center items-center ">
                <Card>
                  <div className="flex justify-center  ">
                    <p className="text-black lg:text-lg text-sm font-bold font-primary">
                      {items.header}
                    </p>
                  </div>
                  <div className="group ">
                    <CardContent className="flex aspect-square items-center justify-center p-1  relative">
                      <img
                        src={items.image}
                        loading="lazy"
                        alt="Price slider with images"
                        srcSet={`${items.image} 1x, ${items.image} 2x`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
                        className="h-96 mb-4 max-w-[280px] object-cover rounded-3xl "
                      />
                    </CardContent>
                  </div>
                  <div className=" inset-0  flex items-end justify-end ">
                    <p
                      dangerouslySetInnerHTML={{ __html: items.info }}
                      className="text-black font-bold lg:text-md w-[280px] ml-5 "
                    ></p>
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

export default Price;
