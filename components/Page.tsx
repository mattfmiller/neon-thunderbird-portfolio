import styled from "@emotion/styled";
import React from "react";
import { NAV_HEIGHT } from "../constants/constants";

const Div = styled.div({
  paddingTop: NAV_HEIGHT,
});

const Page: React.FC = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Page;
