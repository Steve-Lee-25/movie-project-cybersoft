import React from "react";
import { Container } from "./style";
import StopIcon from "@material-ui/icons/Stop";

function Index({ color, text }) {
  return (
    <Container>
      <StopIcon style={{ color: `${color}`, borderRadius: 20 }} />
      <span>{text}</span>
    </Container>
  );
}

export default Index;
