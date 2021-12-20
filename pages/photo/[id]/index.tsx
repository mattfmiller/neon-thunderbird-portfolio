import * as React from "react";
import Link from "next/link";
import { server } from "../../../config";

interface Props {
  photo: any;
}

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/photos/${context.params.id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/photos/`);
  const photos: any[] = await res.json();
  const ids = photos.map((photo) => photo.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const Photo: React.FC<Props> = ({ photo }) => {
  return (
    <>
      <img alt={photo.alt} src={photo.source} width={800} />
      <div>
        {photo.film} shot on {photo.camera}{" "}
      </div>
      <Link href="/">Go Back</Link>
    </>
  );
};

export default Photo;
