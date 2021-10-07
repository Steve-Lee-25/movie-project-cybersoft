import React, { useEffect } from "react";
import { Container, Top, Bottom } from "./styles";
import request from "../../API/request";
import Brand from "./Brand/Index";
import ListTheater from "./ListTheater/Index";
import MovieDetailList from "./MovieDetailList/Index";

function Index() {
  return (
    <Container>
      {/* LIST - BRAND */}
      <Top>
        <Brand />
      </Top>
      {/* CINEMA LIST - MOVIE LIST */}
      <Bottom>
        <ListTheater />
        <MovieDetailList />
      </Bottom>
    </Container>
  );
}

export default Index;
