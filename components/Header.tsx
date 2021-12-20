import * as React from "react";
import headerStyles from "../styles/Header.module.css";

interface Props {
  title: String;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1 className={headerStyles.title}>{title}</h1>
    </div>
  );
};

export default Header;
