import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const imageArr = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div className="image-list">{imageArr}</div>;
};

export default ImageList;
