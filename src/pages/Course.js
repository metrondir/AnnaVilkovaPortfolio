import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/carousel";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Card, CardContent } from "../components/card";
import Image1 from "../img/course/1.webp";
import Image2 from "../img/course/2.webp";
import Image3 from "../img/course/3.webp";
import Image4 from "../img/course/4.webp";

const Course = () => {
  const imagesPrice = [Image1, Image2, Image3, Image4];
  const infoPrice = [
    "<strong> Невозможно унести вообще <br/>всё из обучения, поэтому важно взять столько, сколько помещается сейчас</strong><br/><br/>Остальное у вас всегда будет сохранено.Как и возможность спросить, потому что я на СВЯЗИ И ПОСЛЕ обучения 24/7<br/><br/>Еще у моих учеников есть возможность прийти 3 раза на мои съемки БЕСПЛАТНО! Чтобы взять что-то новое. ",
    "-Начнешь разбираться в фотоапаратах <br/>-Научишься организовывать творческие сьемки <br/>-Научишься работать со светом <br/>-Разберешься в нюансах позирования и работы с моделью<br/>-Научишься привлекать клиентов на свои съемки и заработаешь первые деньги<br/>-Узнаеш практики по работе со страхом и сопротивлением в работе<br/>",
    "Этот курс подойтет всем , с нуля вы,или начинающий фотограф<br/><br/>Cейчас фотографу нужно вести соц сети, снимать, обрабатывать, продавать свои услуги, уметь общаться с клиентом, этс все будет в этом самом обучении <br/><br/> Этот курс-это отличный толчок <br/>к развитию, к тому чтобы вы ходили на работу с удовольствием!",
    "-Теория +практика с 1 дня 3-4 съемки <br/>-Качественный исходник <br/>-Работа с моделями в студии <br/>-Работа со студийным оборудованием <br/>-Схемы света<br/>-Оформление страницы, настройка рекламы<br/>-Как составить прайс<br/>-Продвижение<br/>-Мини портфолио с обучения +бекстейджи<br/>-Отвечаю на ваши вопросы <br/>-Сертификат о прохождении",
  ];
  const headersPrice = [
    "♥ВАЖНО:♥",
    "♥НА ОБУЧЕНИЕ ТЫ:♥",
    "♥КОМУ ПОДОЙДЕТ♥",
    "♥ПРОГРАМА ОБУЧЕНИЕ♥",
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
