import React from "react";
import { Container } from "./styles";

function Index({ logoBrand }) {
  return (
    <Container>
      <img src={logoBrand} alt="" />
    </Container>
  );
}

export default Index;
