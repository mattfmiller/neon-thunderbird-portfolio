import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import { Collection, CollectionCoverPhotos } from "../constants/constants";

const DEFAULT_BG_PATH = "/bgImage.jpg";

const Div = styled.div(
  {
    alignItems: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "rgba(255,255,255,0.5)",
    backgroundBlendMode: "lighten",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    minWidth: "100vw",
    transition: "0.3s ease all",
  },
  (props) => ({
    backgroundImage: `url(${props.path})`,
  })
);

const CollectionLink = styled.a({
  margin: 10,
});

const CollectionList: React.FC = () => {
  const [path, setPath] = useState(DEFAULT_BG_PATH);
  const collections = Object.keys(Collection);
  console.log(collections);

  const handleMouseEnter = (collection: Collection) => {
    setPath(CollectionCoverPhotos[Collection[collection]]);
    console.log(collection, CollectionCoverPhotos[Collection[collection]]);
  };
  const handleMouseLeave = () => {
    setPath(DEFAULT_BG_PATH);
  };
  return (
    <Div path={path}>
      {collections.map((collection) => {
        if (!isNaN(parseInt(collection))) {
          return null;
        }
        return (
          <div
            key={collection}
            onMouseEnter={() => handleMouseEnter(collection)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Link
              href="/collections/[id]"
              as={`/collections/${Collection[collection]}`}
              passHref={true}
            >
              <CollectionLink>{collection}</CollectionLink>
            </Link>
          </div>
        );
      })}
    </Div>
  );
};

export default CollectionList;
