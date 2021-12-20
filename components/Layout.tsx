import React from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header title={"Neon Thunderbird Photography"} />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
