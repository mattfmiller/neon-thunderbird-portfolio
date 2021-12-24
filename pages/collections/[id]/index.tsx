import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Page from "../../../components/Page";

const Div = styled.div({
  width: 550,
  height: 550,
});

export const CollectionItem: React.FC = () => {
  return (
    <Page>
      <Div>
        <div>This will be a collection</div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AM-JKLWsGK3mWBa5BqmsO-hZDOVB3ddsbkFseQ0So_iLBYQxyfdx59eBdR7592yoXEXyLcE43h2jiOBybYYx7oAIAaDIIlWgF_VLwoy8V1LQgOuc4g-FVuYzlHSn45iY4yG_KhuHw1Snt8CgTJj_kpK0SOlO=w3032-h2442-no"
          alt="mountian pic"
          width="500"
          height="500"
          objectFit="contain"
        />
        <Link href="/">Go Back</Link>
      </Div>
    </Page>
  );
};

export default CollectionItem;
