import styled from "@emotion/styled";
import Link from "next/link";
import * as React from "react";
import { NAV_HEIGHT } from "../constants/constants";

const Div = styled.div({
  height: NAV_HEIGHT,
  padding: 10,
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  top: 0,
  width: "100vw",
  zIndex: 100,
});

const Item = styled.div({
  margin: "10px 25px",
  display: "flex",
  justifyContent: "space-between",
  width: 125,
});

const Nav: React.FC = () => {
  return (
    <Div>
      <Item>
        <Link href="/">Matt Miller</Link>
      </Item>
      <Item>
        <Link href="/">Photos</Link>
        <Link href="/about">About</Link>
      </Item>
    </Div>
  );
};

export default Nav;
