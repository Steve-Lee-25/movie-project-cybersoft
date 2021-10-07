import React from "react";
import { Container, ButtonGroup } from "./styles";
import Button from "@material-ui/core/Button";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import TheatersIcon from "@material-ui/icons/Theaters";
import { NavLink } from "react-router-dom";

function Index({ name, descreption }) {
  return (
    <Container>
      {/* NAME */}
      <h1>{name ? name : "Squid Game"}</h1>
      {/* BUTTON GROUP*/}
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PlayArrowIcon />}
        >
          PLAY
        </Button>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<TheatersIcon />}
        >
          DETAIL
        </Button>

        <ControlPointIcon />

        <PeopleAltIcon />
      </ButtonGroup>
      {/* DESCREPTION */}
      <p>{descreption}</p>
    </Container>
  );
}

export default Index;
