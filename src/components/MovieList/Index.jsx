import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import request from "../../API/request";
import Slider from "react-slick";
import MovieItem from "../MovieItem/Index";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";

function Index() {
  const [movie, SetMovie] = useState([]);
  const dispatch = useDispatch();

  const now = movie.filter((item) => {
    return item.dangChieu === true;
  });

  const commingSoon = movie.filter((item) => {
    return item.sapChieu === true;
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  useEffect(() => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((res) => {
        SetMovie(res.data.content);
        dispatch({
          type: "SET_MOVIE",
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <nav>
        <ul className="nav nav-tabs">
          <li className="active">
            <a className="active" data-toggle="tab" href="#home">
              NOW
            </a>
          </li>

          <li>
            <a data-toggle="tab" href="#menu1">
              COMING SOON
            </a>
          </li>

          <li>
            <NavLink className="news" to="/news">
              NEWS
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="tab-content">
        <div id="home" className="tab-pane  in active">
          <Slider {...settings}>
            {now?.map((item) => {
              return (
                <MovieItem
                  key={item.maPhim}
                  name={item.tenPhim}
                  img={item.hinhAnh}
                  star={4}
                />
              );
            })}
          </Slider>
        </div>
        <div id="menu1" className="tab-pane fade">
          <Slider {...settings}>
            {commingSoon?.map((item) => {
              return (
                <MovieItem
                  key={item.maPhim}
                  name={item.tenPhim}
                  img={item.hinhAnh}
                  star={4}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieHome,
  };
};
export default connect(mapStateToProps)(Index);
