import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

function Index() {
  return (
    <Container className="intro">
      <h1 className="logoHeader">
        <span className="logo">PAGE</span>
        <span className="logo"> NOT FOUNDED.</span>
        <p className="copyright">@NETFLIX</p>
        <NavLink className="switch" to="">
          HOME
        </NavLink>
      </h1>
    </Container>
  );
}

export default Index;
