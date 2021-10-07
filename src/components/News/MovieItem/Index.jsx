import React from "react";
import { Container, Logo } from "./styles";

function Index({ id, name, images, descreption, status }) {
  return (
    <Container>
      <Logo src={images} alt="movie-item-news" />
      <h4>
        {id}.{name}
      </h4>
      <p>{descreption}</p>
    </Container>
  );
}

export default Index;
