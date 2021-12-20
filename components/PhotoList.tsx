import React from "react";
import PhotoItem from "./PhotoItem";
import photoStyles from "../styles/Photo.module.css";

interface Props {
  photos: any[];
}

const PhotoList: React.FC<Props> = ({ photos }) => {
  return (
    <div className={photoStyles.grid}>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
