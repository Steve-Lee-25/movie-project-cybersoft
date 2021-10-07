import React, { useState, useEffect } from "react";
import { Carousel, Wrap } from "./styles";
import { base_Url } from "../../imageUrl/baseUrl";
import axios from "axios";
import { useDispatch } from "react-redux";
import InfoBanner from "../InfoBanner/Index";

function Index() {
  const [banner, setBanner] = useState([]);
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/trending/all/week?api_key=a88582247bc48f7806d3127898290c45&language=en-US",
      method: "GET",
    })
      .then((res) => {
        setBanner(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Carousel {...settings}>
      {banner?.map((item) => {
        return (
          <Wrap>
            <div className="InfoBanner">
              <InfoBanner
                name={item.original_title}
                descreption={item.overview}
              />
            </div>
            <img
              key={item.original_title}
              src={`${base_Url}${item.backdrop_path}`}
              alt=""
            />
          </Wrap>
        );
      })}
    </Carousel>
  );
}

export default Index;
