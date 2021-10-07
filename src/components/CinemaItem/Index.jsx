import React, { useState, useEffect } from "react";
import { Container, Logo, Content } from "./styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

function Index({ img, name, address, listMovie }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <Logo key={listMovie.danhSachPhim.maPhim} src={img} alt={name} />
      <Content>
        <h3>{name}</h3>
        <p>{address}</p>
        <Button
          onClick={() => {
            dispatch({
              type: "SET_CINEMA_ITEM_DETAIL",
              payload: listMovie,
            });
          }}
          variant="outlined"
          color="secondary"
        >
          SELECT
        </Button>
      </Content>
    </Container>
  );
}

export default Index;
