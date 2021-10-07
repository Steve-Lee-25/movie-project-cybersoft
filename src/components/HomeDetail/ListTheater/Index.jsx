import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import CinemaItem from "../../CinemaItem/Index";
import request from "../../../API/request";
import { useSelector } from "react-redux";

function Index() {
  const [cinema, handleCinema] = useState([]);
  const brand = useSelector((state) => state.brandList);

  useEffect(() => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap&maNhom=GP01",
      method: "GET",
    })
      .then((res) => {
        handleCinema(
          res.data.content.filter((item) => {
            return item.maHeThongRap === brand.maHeThongRap;
          })[0].lstCumRap
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [brand]);

  return (
    <Container>
      {cinema?.map((item) => {
        return (
          <CinemaItem
            key={item.hinhAnh}
            name={item.tenCumRap}
            address={item.diaChi}
            img={item.hinhAnh}
            listMovie={item}
          />
        );
      })}
      {/* <CinemaItem /> */}
    </Container>
  );
}

export default Index;
