import React, { useState } from "react";

const CarouselInputForm = ({ onSubmit }) => {
  const [header, setHeader] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageUrl = reader.result;

      formData.append("header", header);
      formData.append("info", info);
      formData.append("image", imageUrl);
      onSubmit(formData);

      setHeader("");
      setInfo("");
      setImage(null);
    };

    if (image) {
      reader.readAsDataURL(image);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Header:
          <input
            type="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
        </label>
        <br />
        <label>
          Info:
          <textarea value={info} onChange={(e) => setInfo(e.target.value)} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
        <br />
        {image && (
          <div>
            <p>Selected Image:</p>
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              style={{ width: "100px" }}
            />
          </div>
        )}
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
};

export default CarouselInputForm;
