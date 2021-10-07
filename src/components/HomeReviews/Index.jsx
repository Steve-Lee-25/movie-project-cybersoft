import React, { useState, useEffect } from "react";
import { Container, Top, Bottom, Right, Left } from "./styles";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import Slider from "react-slick";
import { base_Url } from "../../imageUrl/baseUrl";
import MovieItem from "../MovieItem/Index";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const [movie, setMovies] = useState([]);
  const [play, setPlay] = useState(0);

  const dispatch = useDispatch();

  const infoMovieItem = useSelector((state) => state.infoMovie.infoMovieItem);

  const truncate = (string) => {
    if (string.length < 100) {
      return "The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.";
    }
    return string;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: play,
    },
  };

  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie?api_key=a88582247bc48f7806d3127898290c45&with_genres=27",
      method: "GET",
    })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Container
      style={{ background: `url(${base_Url}${infoMovieItem?.backdrop_path})` }}
    >
      <Top>
        <Left>
          <h1>
            {infoMovieItem?.original_title
              ? infoMovieItem.original_title
              : "Batman V superman Dawn of Justice"}
          </h1>
          Date : <input type="date" defaultValue="09/29/2021" />
          <p>
            {infoMovieItem
              ? truncate(infoMovieItem?.overview)
              : "A ticking-time-bomb insomniac and a slippery soap salesman channe primal male aggression into a shocking  form  therapy. Their concept catches on, with underground fight clubs forming every town, until an eccentric gets  the way and ignites anout  control spiral toward oblivion."}
          </p>
          <div className="homeReviews__top__left__button">
            <Button
              onClick={() => {
                setPlay(1);
              }}
              variant="outlined"
              color="secondary"
            >
              PLAY
            </Button>
            <Button variant="outlined" color="secondary">
              BOOKING
            </Button>
          </div>
        </Left>
        <Right>
          <YouTube videoId="5VYb3B1ETlk" opts={opts} />
        </Right>
      </Top>
      <Bottom>
        <Slider {...settings}>
          {movie?.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  dispatch({
                    type: "SET_INFO_MOVIES_HOME",
                    payload: item,
                  });
                }}
              >
                <MovieItem
                  key={item.id}
                  img={`${base_Url}${item.poster_path}`}
                  star={0}
                />
              </button>
            );
          })}
        </Slider>
      </Bottom>
    </Container>
  );
}
export default Index;
