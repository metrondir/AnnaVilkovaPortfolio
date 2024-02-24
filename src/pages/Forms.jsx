import React, { useState } from "react";
import CarouselInputForm from "./ChangePriceForm";
import ImageCompressor from "image-compressor";

import Price from "./Price";
import Course from "./Course";

function Forms() {
  const [imagesPrice, setImagesPrice] = useState([]);
  const [infoPrice, setInfoPrice] = useState([]);
  const [headerPrice, setHeaderPrice] = useState([]);
  const [rerender, setRerender] = useState(0);

  const handleAddCard = async (newCard) => {
    setRerender((prevRerender) => prevRerender + 1);
    const imageFile = newCard.get("image");

    const compressedImageFile = await compressImage(imageFile);
    setImagesPrice((prevImages) => [...prevImages, compressedImageFile]);
    setInfoPrice((prevInfo) => [...prevInfo, newCard.get("info")]);
    setHeaderPrice((prevHeader) => [...prevHeader, newCard.get("header")]);
  };

  const compressImage = async (imageFile) => {
    const compressedFile = await new ImageCompressor(imageFile, {
      quality: 0.6,
      maxWidth: 800,
      maxHeight: 600,
    }).compress();

    return compressedFile;
  };

  return (
    <div className="flex cursor-none flex-col overflow-y-auto  bg-gradient-to-b lg:bg-gradient-to-r from-neutral-500 to-gray-200 h-screen">
      <header className="text-center text-4xl font-primary  mt-20">
        {" "}
        Изминение в отделе <strong>Price</strong>
      </header>

      <div>
        <CarouselInputForm
          onSubmit={handleAddCard}
          props={{ category: "price" }}
        />
      </div>

      <div>
        <Price rerender={rerender} />
      </div>

      <header className="text-center text-4xl font-primary mt-20">
        {" "}
        Изминение в отделе <strong>Обучение</strong>
      </header>

      <div>
        <CarouselInputForm
          onSubmit={handleAddCard}
          props={{ category: "course" }}
        />
      </div>

      <div>
        <Course rerender={rerender} />
      </div>
    </div>
  );
}

export default Forms;
