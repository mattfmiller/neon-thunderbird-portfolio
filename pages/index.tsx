import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import CollectionList from "../components/CollectionList";

const Div = styled.div({
  position: "absolute",
  top: 0,
});

const Home: NextPage = () => {
  return (
    <Div>
      <Head>
        <title>Matt Miller Photography</title>
        <meta />
      </Head>
      <CollectionList />
    </Div>
  );
};

export default Home;
