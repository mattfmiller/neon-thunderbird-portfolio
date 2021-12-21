import styled from "@emotion/styled";
import Link from "next/link";
import * as React from "react";

const Div = styled.div({
  height: 50,
  padding: 10,
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

const UL = styled.ul({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  listStyle: "none",
});

const LI = styled.li({
  margin: "5px 15px",
});

const Nav: React.FC = () => {
  return (
    <Div>
      <UL>
        <LI>
          <Link href="/">Matt Miller</Link>
        </LI>
        <LI>
          <Link href="/">Photos</Link>
          <Link href="/about">About</Link>
        </LI>
      </UL>
    </Div>
  );
};

export default Nav;
