import type { NextPage } from "next";
import Head from "next/head";
import CollectionList from "../components/CollectionList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matt Miller Photography</title>
        <meta />
      </Head>
      <CollectionList />
    </div>
  );
};

export default Home;
