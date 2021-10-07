import React, { useState } from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
function Index({ infoSeat }) {
  const dispatch = useDispatch();
  const [click, handleClick] = useState(false);

  return (
    <Container
      onClick={() => {
        if (infoSeat?.daDat === false) {
          dispatch({
            type: "SET_INFO_SEATS",
            payload: infoSeat,
          });
        }
        handleClick(!click);
      }}
      className={`${infoSeat?.daDat && "active"} ${infoSeat?.loaiGhe} ${
        click && "btnClick"
      } `}
    ></Container>
  );
}

export default Index;
