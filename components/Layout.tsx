import styled from "@emotion/styled";
import React from "react";
import Nav from "./Nav";

const Div = styled.div({
  position: "relative",
  width: "100vw",
});

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Div>
        <main>
          <Nav />
          {children}
        </main>
      </Div>
    </>
  );
};

export default Layout;
