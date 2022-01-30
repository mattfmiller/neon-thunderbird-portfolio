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
          src="https://lh3.googleusercontent.com/pw/AM-JKLUDnuRQpciEuFuWfc0Ql_OrrZecMFcJZaMDXksadWmitfp1o-O1TuspFvnGNSZPZa4bISThrmYGhhKi44yrMbCqxoSsIzJrLl8iESPUO6SVpvD0bI7lMtmW-dp17tdgR0D2Y4mTNhIV5qWdVEf1PCQS=w1920-h1547-no"
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
