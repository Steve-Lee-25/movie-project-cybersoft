import React, { useState, useEffect } from "react";
import { Container, Content, Header, Describe, Body } from "./styles";

function Index({ dataInfo }) {
  // function : nếu mô tả quá ngắn thì hiển thị text cung cấp sẵn.
  const truncate = (string) => {
    if (string) {
      if (string.length < 20) {
        string = "";
        return string;
      } else return string;
    }
  };

  return (
    <Container>
      {/* TESING - BUTTON */}

      {/* <button
        onClick={() => {
          // console.log(truncate(dataInfo?.moTa));
          console.log(dataInfo);
        }}
      >
        CLICK
      </button> */}
      <Content>
        <Header>{dataInfo ? dataInfo?.tenPhim : "PARASITE"}</Header>
        <Describe>
          {truncate(dataInfo?.moTa) !== ""
            ? dataInfo?.moTa
            : 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'}
        </Describe>
        <Body>
          <table>
            <tr>
              <td>Genre</td>
              <td style={{ color: "#c22", fontWeight: 600 }}>
                C18 - THIS FLIM JUST FOR PEOPLE FROM 18 AGE.
              </td>
            </tr>

            <tr>
              <td>Director</td>
              <td>Steve Jobs</td>
            </tr>

            <tr>
              <td>Actors</td>
              <td>Justin Bieber</td>
            </tr>

            <tr>
              <td> Time </td>
              <td>180 minutes</td>
            </tr>

            <tr>
              <td> Type</td>
              <td>Romance</td>
            </tr>
          </table>
        </Body>
      </Content>
    </Container>
  );
}

export default Index;
