import React from "react";
import Link from "next/Link";
import photoStyles from "../styles/Photo.module.css";
import Image from "next/image";

interface Props {
  photo: any;
}

const Photo: React.FC<Props> = ({ photo }) => {
  return (
    <Link href="/photo/[id]" as={`/photo/${photo.id}`}>
      <a className={photoStyles.card}>
        <img alt={photo.alt} src={photo.source} width={250} />
      </a>
    </Link>
  );
};

export default Photo;
