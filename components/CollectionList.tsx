import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Collection } from "../constants/constants";

const Div = styled.div({
  backgroundImage: "url('/bgImage.jpg')",
  backgroundSize: "cover",
  minHeight: "100vh",
  minWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const CollectionLink = styled.a({
  margin: 10,
});

const CollectionList: React.FC = () => {
  const collections = Object.keys(Collection);
  console.log(collections);
  return (
    <Div>
      {collections.map((collection) => (
        <Link
          key={collection}
          href="/collections/[id]"
          as={`/collections/${collection}`}
          passHref={true}
        >
          <CollectionLink>{collection}</CollectionLink>
        </Link>
      ))}
    </Div>
  );
};

export default CollectionList;
