import React, { useState, useEffect } from "react";
import { axiosPrivate } from "./axios";

const CarouselInputForm = ({ onSubmit, props }) => {
  const [header, setHeader] = useState("");
  const [info, setInfo] = useState("");
  const [updateCardHeader, setUpdateCardHeader] = useState("");
  const [updateCardInfo, setUpdateCardInfo] = useState("");
  const [updateCardImage, setUpdateCardImage] = useState(null);

  const [image, setImage] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [options, setOptions] = useState([]);
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleFileUpdateChange = (e) => {
    setUpdateCardImage(e.target.files[0]);
  };

  const handleCardSelection = (e) => {
    setSelectedCard(e.target.value);
  };
  const handleNumberOptions = async () => {
    try {
      const response = await axiosPrivate.get(`/${props.category}Number`);

      setOptions(response.data);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };
  const handleDeleteCard = async (selectedCardId) => {
    try {
      const response = await axiosPrivate.delete(
        `/${props.category}/${selectedCardId}`
      );
      if (onSubmit) {
        onSubmit(response.data);
      }
      handleNumberOptions();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };
  const handleAddCardSubmit = async (e) => {
    e.preventDefault();
    if (header === "" || info === "" || image == null) {
      alert("Заполните все поля!");
      return;
    }
    const formData = new FormData();

    formData.append("header", header);
    formData.append("info", info);
    formData.append("image", image);
    setHeader("");
    setInfo("");
    setImage(null);
    try {
      const response = await axiosPrivate.post(`/${props.category}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (onSubmit) {
        onSubmit(response.data);
      }
      handleNumberOptions();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleUpdateCardSubmit = async (selectedCardId) => {
    const formData = new FormData();

    formData.append("header", updateCardHeader);
    formData.append("info", updateCardInfo);
    if (image !== null) {
      formData.append("image", updateCardImage);
    }

    try {
      const response = await axiosPrivate.put(
        `${props.category}/${selectedCardId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    handleNumberOptions();
  }, []);

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Добавить картку
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Удалить карту
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab(3)}
        >
          Изменить картку
        </button>
      </div>

      <form
        className={`max-w-md mx-auto p-6 rounded-md shadow-2xl ${
          activeTab !== 1 ? "hidden" : ""
        }`}
      >
        <label className="block mb-4">
          <span className="text-gray-700">Заголовок:</span>
          <input
            type="text"
            required
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md "
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Информация:</span>
          <textarea
            required
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="mt-1 h-48 p-2 block w-full rounded-md border border-gray-300"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Фото:</span>
          <input
            type="file"
            required
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          />
        </label>
        {image && (
          <div className="mb-4">
            <p className="text-gray-700">Вибраная Картинка:</p>

            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              className="mt-2 rounded-md"
              style={{ width: "100px" }}
            />
          </div>
        )}
        <button
          type="submit"
          onClick={handleAddCardSubmit}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Добавать картку
        </button>
      </form>

      <div
        className={`max-w-md mx-auto p-6 rounded-md shadow-2xl ${
          activeTab !== 2 ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center mt-6">
          <label className="block mb-4">
            <span className="text-2xl ">Выберите картку для удаления:</span>

            <select
              value={selectedCard || ""}
              onChange={handleCardSelection}
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
            >
              <option value="" disabled>
                Выберите номер картки для удаления:
              </option>
              {options > 0 ? (
                Array.from({ length: options }, (_, index) => (
                  <option key={index} value={index + 1}>
                    Картка {index + 1}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No options available
                </option>
              )}
            </select>
          </label>

          <button
            onClick={() => handleDeleteCard(selectedCard)}
            className="bg-blue-500 mr-64  mt-5 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Удалить карту
          </button>
        </div>
      </div>

      <div
        className={`max-w-md mx-auto p-6 rounded-md shadow-2xl ${
          activeTab !== 3 ? "hidden" : ""
        }`}
      >
        <label className="block mb-4">
          <span className="text-gray-700">Заголовок:</span>
          <input
            type="text"
            value={updateCardHeader}
            onChange={(e) => setUpdateCardHeader(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md "
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Информация:</span>
          <textarea
            value={updateCardInfo}
            onChange={(e) => setUpdateCardInfo(e.target.value)}
            className="mt-1 h-48 p-2 block w-full rounded-md border border-gray-300"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Фото:</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpdateChange}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          />
        </label>
        {updateCardImage && (
          <div className="mb-4">
            <p className="text-gray-700">Вибраная Картинка:</p>
            <img
              src={URL.createObjectURL(updateCardImage)}
              alt="Selected"
              className="mt-2 rounded-md"
              style={{ width: "100px" }}
            />
          </div>
        )}
        <label className="block mb-4">
          <span className="text-xl ">Выберите картку для обновления:</span>

          <select
            value={selectedCard || ""}
            onChange={handleCardSelection}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          >
            <option value="" disabled>
              Выберите номер картки для обновления:
            </option>
            {options > 0 ? (
              Array.from({ length: options }, (_, index) => (
                <option key={index} value={index + 1}>
                  Картка {index + 1}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No options available
              </option>
            )}
          </select>
        </label>
        <button
          type="submit"
          onClick={() => handleUpdateCardSubmit(selectedCard)}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Обновить картку
        </button>
      </div>
    </div>
  );
};

export default CarouselInputForm;
