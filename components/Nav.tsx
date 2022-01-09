import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { NAV_HEIGHT } from "../constants/constants";

enum linkPaths {
  home = "/",
  about = "/about",
}

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

const PageLink = styled.div<{
  header?: boolean;
  activeLink?: boolean;
}>(
  {
    fontSize: 20,
    cursor: "pointer",
    "&:hover": {
      color: "#707070",
    },
  },
  (props) => ({
    fontSize: props.header ? 20 : 16,
    textDecoration: props.activeLink ? "underline" : "none",
  })
);

const Item = styled.div({
  margin: "10px 25px",
  display: "flex",
  justifyContent: "space-between",
  width: 125,
});

const Nav: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Div>
      <Item>
        <Link href={linkPaths.home} passHref={true}>
          <PageLink header={true}>Matt Miller</PageLink>
        </Link>
      </Item>
      <Item>
        <Link href={linkPaths.home} passHref={true}>
          <PageLink activeLink={pathname === linkPaths.home}>Photos</PageLink>
        </Link>
        <Link href={linkPaths.about} passHref={true}>
          <PageLink activeLink={pathname === linkPaths.about}>About</PageLink>
        </Link>
      </Item>
    </Div>
  );
};

export default Nav;
