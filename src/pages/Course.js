import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/carousel";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Card, CardContent } from "../components/card";
import Image1 from "../img/price/10.webp";
import Image2 from "../img/price/8.webp";
import Image3 from "../img/price/15.webp";
import Image4 from "../img/price/14.webp";

const Course = () => {
  const imagesPrice = [Image1, Image2, Image3, Image4];
  const infoPrice = [
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>В стоимость входит:</strong><br/>-Фотограф, <br/>-2 образа, <br/>-Макияж и укладка,<br/>-Фотостудия <br/><br/><strong> &nbsp;&nbsp; &nbsp;&nbsp;СТОИМОСТЬ </strong> &nbsp;&nbsp;&nbsp;&nbsp;3600 грн<br/>Ви получаете полную организацию сьемки за вас <br/>Оригинали фото до 5-ти дней от 300 шт на google disk<br/>Фото которие ви вибираете<br/> сами в полной ретуши и цветокоррекции до 17 дней 20 шт",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>В стоимость входит:</strong><br/>-Фотограф, <br/>-2 образа, <br/>-Макияж и укладка,<br/>-Фотостудия на вибор <br/><br/><strong> &nbsp;&nbsp; &nbsp;&nbsp;СТОИМОСТЬ </strong> &nbsp;&nbsp;&nbsp;&nbsp;3900 грн<br/>Ви получаете полную организацию сьемки за вас <br/>Оригинали фото до 5-ти дней от 300 шт на google disk<br/>Фото которие ви вибираете<br/> сами в полной ретуши и цветокоррекции до 17 дней 20 шт",
    "♥Индивидуальная &nbsp;&nbsp; 1300грн/час<br/><br/>♥Беременость,<br/>Парная,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1500грн/чаc <br/>Семейная<br/><br/>♥Свадебная,<br/> Крещение, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;от 1600грн/час<br/> День Рождение<br/>",

    "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Подарочние Сертификаты</strong><br/>В конверте /в ел. виде <br/>В наличии на:<br/> -Фотосесию<br/>-Все включено <br/> -Обучение<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Обучение</strong><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Провожу обучение<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Фотограф С О<br/><br/>Мастер класи для начинающих &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;по студийному свету<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Уроки ретуши портрета",
  ];
  const headersPrice = [
    "♥LIGHT ПАКЕТ УСЛУГ♥",
    "♥VIP ПАКЕТ УСЛУГ♥",
    "♥PRICE LIST♥",
    "♥PRICE ДОПОЛНЕНИЕ♥",
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
          {imagesPrice.map((image, index) => (
            <CarouselItem key={index} className="pl-2 w-full">
              <div className="relative flex flex-col justify-center items-center">
                <Card>
                  <div className="flex justify-center ">
                    <p className="text-black lg:text-lg text-sm font-bold font-primary">
                      {headersPrice[index]}
                    </p>
                  </div>
                  <div className="group">
                    <CardContent className="flex aspect-square items-center justify-center p-1 relative">
                      <img
                        src={image}
                        srcSet={`${image} 1x, ${image} 2x`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
                        alt="Price slider with images"
                        className="h-96 mb-4 max-w-[280px] object-cover rounded-3xl  duration-300  group-hover:opacity-20"
                      />
                      <div className="absolute inset-0  flex items-center justify-start opacity-0 hover:opacity-100">
                        <p
                          dangerouslySetInnerHTML={{ __html: infoPrice[index] }}
                          className="text-black font-bold lg:text-md w-[280px] ml-5 "
                        ></p>
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
