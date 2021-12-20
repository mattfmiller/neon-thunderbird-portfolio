import * as React from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

interface Props {}

const Nav: React.FC = (props: Props) => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
