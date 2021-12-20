import type { NextPage } from "next";
import Head from "next/head";
import PhotoList from "../components/PhotoList";
import { server } from "../config";

interface Props {
  photos: any[];
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/photos`);
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

const Home: NextPage<Props> = ({ photos }) => {
  return (
    <div>
      <Head>
        <title>Neon Thunderbird Photography</title>
        <meta />
      </Head>
      <PhotoList photos={photos} />
    </div>
  );
};

export default Home;
