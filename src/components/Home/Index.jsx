import React, { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import Header from "../Header/Index";
import Banner from "../Banner/Index";
import MovieList from "../MovieList/Index";
import HomeReviews from "../HomeReviews/Index";
import HomeDetail from "../HomeDetail/Index";
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
  });

  return (
    <Container>
      <div className={`home__header ${show && "home__header__show"}`}>
        <Header className="hello" />
      </div>
      <Content>
        <Banner />
        <MovieList />
        <HomeReviews />
      </Content>
      <HomeDetail />
      <Footer />
    </Container>
  );
}

export default Index;
