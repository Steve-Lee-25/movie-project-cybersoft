import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Slider from "react-slick";
import request from "../../../API/request";
import BrandItem from "./BrandItem/Index";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const [brand, handleBrand] = useState([]);

  const dispatch = useDispatch();

  const brandSelected = useSelector((state) => state.brandList.maHeThongRap);

  const temp = {
    BHDStar: false,
    CGV: false,
    CineStar: false,
    Galaxy: false,
    LotteCinima: false,
    MegaGS: false,
  };
  const [active, handleActive] = useState(temp);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((res) => {
        handleBrand(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });

    // switch turn on / turn off brand
    switch (brandSelected) {
      case "BHDStar":
        handleActive({
          ...temp,
          BHDStar: !active.BHDStar,
        });
        break;

      case "CGV":
        handleActive({
          ...temp,
          CGV: !active.CGV,
        });
        break;

      case "CineStar":
        handleActive({
          ...temp,
          CineStar: !active.CineStar,
        });
        break;

      case "Galaxy":
        handleActive({
          ...temp,
          Galaxy: !active.Galaxy,
        });
        break;

      case "LotteCinima":
        handleActive({
          ...temp,
          LotteCinima: !active.LotteCinima,
        });
        break;

      default:
        handleActive({
          ...temp,
          MegaGS: !active.MegaGS,
        });
    }
  }, [brandSelected]);

  return (
    <Container>
      <Slider {...settings}>
        {brand?.map((item) => {
          return (
            <button
              onClick={() => {
                dispatch({
                  type: "SET_BRANDS",
                  payload: item.maHeThongRap,
                });
              }}
              key={item.biDanh}
              className={`${
                active[item.maHeThongRap] ? `${item.maHeThongRap}` : ""
              }`}
            >
              <BrandItem logoBrand={item.logo} />
            </button>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Index;
