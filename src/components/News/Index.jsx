import React, { useEffect, useState } from "react";
import { Container, Banner, Detail, Logo, InfoNews } from "./styles";
import Header from "../Header/Index";
import MovieItem from "./MovieItem/Index";
import { newsMovies } from "../../Data/NewsData.js";
import { newsImage } from "../../Data/News_images";
import { Comming } from "../../Data/Comming";
import CommingSoon from "./ComingSoon/Index";
import Footer from "../Footer/Index";

function Index() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <Container>
      {/* HEADER */}
      <div className={`news__header ${show && "news__header__show"} `}>
        <Header />
      </div>
      {/* CONTENT */}
      <div className="news__content">
        <Banner className="news__banner">
          {/* fade left */}
          <div className="fade-left"></div>
          <div className="news__banner__content">
            {/* Logo */}
            <Logo
              src="../../assets/images/banner__logo.png"
              className="news__logo"
            />
            {/* Detail */}
            <Detail className="news__detail">
              <h2>Great News</h2>

              <p>
                <span>2021</span>
                <span>13+</span>
                <span>2 Seasons</span>
                <span>TV Comedies</span>
              </p>

              <p>
                A TV news producer's ambitions take an awkward turn when her
                mother rejoins the workforce and snags a job as the station's
                newest intern.
              </p>

              <p>
                Starring:
                <span>Briga Heelan, Andrea Martin, Adam Campbell</span>
              </p>

              <p>
                Creators:<span>Tracey Wigfield</span>
              </p>
            </Detail>
          </div>
        </Banner>
        {/* new item */}
        <InfoNews>
          {/* TOP - INFO  */}
          <div className="nav-top-infoNews">
            <img
              className="nav-top-infoNews__left"
              src="../../assets/images/logo-netflix-N.png"
            />
            <p>
              <strong>Watch all you want.</strong>
            </p>
            <button className="nav-top-infoNews_right">LOGIN NOW</button>
          </div>
          {/* COPY-RIGHT */}
          <p className="infoNews__copyRight">
            Tina Fey executive produces and guest-stars in this workplace comedy
            from the mind of "30 Rock" writer Tracey Wigfield.
          </p>
          {/* BODY */}
          <div className="InfoNews__body">
            {/* HEADER */}
            <div className="InfoNews__body__header">
              <h1>Episodes</h1>
              <h4>Great News</h4>
            </div>
            {/* SELECT */}
            <select id="">
              <option value="1">Season 1</option>
              <option value="1">Season 2</option>
            </select>
            {/* RELEASE */}
            <div className="InfoNews__body__release">
              <h4>Release year: 2017</h4>
              <p>
                In a second season of newsroom shenanigans, "The Breakdown" team
                gets a new boss -- and she's got big plans to take them to the
                top.
              </p>
            </div>
            {/* MOVIES - ITEM */}
            <div className="InfoNews__body__item">
              {newsMovies.map((item) => {
                return (
                  <MovieItem
                    key={item.id}
                    images={item.images}
                    name={item.name}
                    id={item.id}
                    descreption={item.descreption}
                  />
                );
              })}
            </div>
            {/* MORE - DETAILS */}
            <div className="InfoNews__body__MoreDetail">
              <h1>More Details</h1>
              <div className="InfoNews__body__MoreDetail__cast">
                <p>Cast</p>
                <div className="InfoNews__body__MoreDetail__cast__actor">
                  <div className="InfoNews__body__MoreDetail__cast__actor-item">
                    Briga Heelan
                  </div>
                  <div className="InfoNews__body__MoreDetail__cast__actor-item">
                    Andrea Martin
                  </div>
                  <div className="InfoNews__body__MoreDetail__cast__actor-item">
                    Adam Campbell
                  </div>
                  <div className="InfoNews__body__MoreDetail__cast__actor-item">
                    John Michael Higgins
                  </div>
                  <div className="InfoNews__body__MoreDetail__cast__actor-item">
                    Horatio Sanz
                  </div>
                  <div className="InfoNews__body__MoreDetail__cast__actor-item">
                    Nicole Richie
                  </div>
                </div>
              </div>
            </div>
            {/* MORE LIKE THIS */}
            <div className="InfoNews__body__MoreLikeThis">
              <h1>More Like This</h1>
              <div className="InfoNews__body__MoreLikeThis__item">
                {newsImage.map((item) => {
                  return (
                    <img
                      className="InfoNews__body__MoreLikeThis__item__img"
                      src={item.images}
                      key={item.id}
                    />
                  );
                })}
              </div>
            </div>
            {/* Comming Soon */}
            <div className="InfoNews__body__comingSoon">
              <h1>Coming Soon</h1>
              <div className="InfoNews__body__comingSoon_item">
                {Comming.map((item) => {
                  return (
                    <CommingSoon
                      key={item.id}
                      title={item.title}
                      paragragh={item.paragragh}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </InfoNews>
      </div>
      {/* FOOTER */}
      <Footer styles={{ background: "#111" }} />
    </Container>
  );
}

export default Index;
