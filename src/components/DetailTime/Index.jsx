import React from "react";
import { Container, Header, Picture, Info, Body } from "./styles";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function Index({ name, address, img, lichChieuPhim, movieCode }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>
        <Picture src={img} alt="image_cinema" />

        <Info>
          <h3>{name}</h3>
          <p>
            {address}
            <Button
              onClick={() => {
                dispatch({
                  type: "SET_DETAIL_DATA_PAGE",
                  payload: movieCode,
                });
              }}
            >
              <NavLink className="navLink" to="detail">
                [ Detail ]
              </NavLink>
            </Button>
          </p>
        </Info>
      </Header>

      <Body>
        <table>
          <tr>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1200px-Netflix_logo.svg.png"
                alt="logo-quality-cinema"
              />
            </td>
            <td>
              {lichChieuPhim?.map((item) => {
                const temp = item.ngayChieuGioChieu.split("T");
                const temp_1 = temp[1].slice(0, 5);
                const temp_2 = item.maLichChieu;
                return (
                  <Button
                    style={{
                      margin: 10,
                      paddingRight: 20,
                      textAlign: "center",
                    }}
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      // dispatch({
                      //   type: "SET_DETAIL_DATA_PAGE",
                      //   payload: movieCode,
                      // });
                      dispatch({
                        type: "SET_MA_LICH_CHIEU",
                        payload: temp_2,
                      });
                    }}
                  >
                    <NavLink className="navLink" to="booking">
                      {temp_1}
                    </NavLink>
                  </Button>
                );
              })}
            </td>
          </tr>
        </table>
      </Body>
    </Container>
  );
}

export default Index;
