import React from "react";
import { Container } from "./styles";

function Index({ title, paragragh }) {
  return (
    <Container>
      <h5>{title}</h5>
      <p>{paragragh}</p>
    </Container>
  );
}

export default Index;
