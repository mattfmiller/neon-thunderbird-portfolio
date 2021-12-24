import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Collection } from "../constants/constants";

const Div = styled.div({
  alignItems: "center",
  backgroundAttachment: "fixed",
  backgroundImage: "url('/bgImage.jpg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  minWidth: "100vw",
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
