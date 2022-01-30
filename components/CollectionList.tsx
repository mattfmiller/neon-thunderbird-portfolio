import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import {
  Collection,
  CollectionCoverPhotos,
  CollectionLabels,
} from "../constants/constants";

const DEFAULT_BG_PATH = "/bgImage.jpg";

const Div = styled.div<{ path: string }>(
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
    // transition: "0.3s ease all",
  },
  (props) => ({
    backgroundImage: `url(${props.path})`,
  })
);

const CollectionLink = styled.a({
  margin: 10,
  "&:hover": {
    color: "#707070",
  },
});

const StringIsNaN = (value: string) => isNaN(Number(value)) === true;

const CollectionList: React.FC = () => {
  const [path, setPath] = useState(DEFAULT_BG_PATH);
  const collections: number[] = Object.keys(Collection)
    .filter(StringIsNaN)
    .map((key) => parseInt(Collection[key], 10));
  console.log(collections);

  const handleMouseEnter = (collection: Collection) => {
    setPath(CollectionCoverPhotos[collection]);
    console.log(collection, CollectionCoverPhotos[collection]);
  };

  const handleMouseLeave = () => {
    setPath(DEFAULT_BG_PATH);
  };

  return (
    <Div path={path}>
      {collections.map((collection) => {
        return (
          <div
            key={collection}
            onMouseEnter={() => handleMouseEnter(collection)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Link
              href="/collections/[id]"
              as={`/collections/${collection}`}
              passHref={true}
            >
              <CollectionLink>{CollectionLabels[collection]}</CollectionLink>
            </Link>
          </div>
        );
      })}
    </Div>
  );
};

export default CollectionList;
