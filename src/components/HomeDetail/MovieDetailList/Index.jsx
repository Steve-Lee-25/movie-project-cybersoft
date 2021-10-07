import React, { useEffect } from "react";
import { Container } from "./styles";
import DetailTime from "../../DetailTime/Index";
import { useSelector } from "react-redux";

function Index() {
  const movieList = useSelector(
    (state) => state.movieListDetail.movieList.danhSachPhim
  );

  useEffect(() => {}, [movieList]);

  return (
    <Container>
      {movieList?.map((item) => {
        return (
          <DetailTime
            name={item.tenPhim}
            address="NETFLIX"
            img={item.hinhAnh}
            lichChieuPhim={item.lstLichChieuTheoPhim}
            movieCode={item.maPhim}
          />
        );
      })}
    </Container>
  );
}

export default Index;
