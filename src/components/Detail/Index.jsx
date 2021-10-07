import React, { useEffect, useState } from "react";
import { Container, Poster } from "./styles";
import Header from "../Header/Index";
import Button from "@material-ui/core/Button";
import InfoMovie from "../InfoMovie/Index";
import DetailTime from "../DetailTime/Index";
import Footer from "../Footer/Index";
import request from "../../API/request";
import { useSelector } from "react-redux";
import Brand from "../HomeDetail/Brand/Index";
import { useHistory } from "react-router-dom";
function Index() {
  const [show, handleShow] = useState(false);
  const [trailer, handleTrailer] = useState(false);

  const movieCode = useSelector((state) => state.detailPage.maPhim);

  const [dataMovie, setDataMovie] = useState(null);

  const history = useHistory();

  const brandCinema = useSelector((state) => state.brandList.maHeThongRap);

  const cinemaList = dataMovie?.heThongRapChieu.filter((item) => {
    return item.maHeThongRap === brandCinema;
  })[0].cumRapChieu;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });

    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim",
      method: "GET",
      params: {
        MaPhim: movieCode,
      },
    })
      .then((res) => {
        setDataMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <div className="detail__contents">
        {/* HEADER */}
        <div
          className={`detail__contents__header ${
            show && "detail__contents__header__show"
          }`}
        >
          <Header />
        </div>
        {/* BANNER */}
        <div
          style={{
            backgroundImage: `url("../../assets/images/backgroundDetail1.jpg")`,
            backgroundColor: "var(--blackBlur)",
          }}
          className="detail__contents__banner"
        >
          <div className="detail__contents__banner_inner">
            <div className="detail__contents__banner__left">
              <Poster
                style={{ width: "100%" }}
                src={dataMovie?.hinhAnh}
                alt="poster__images"
              />
            </div>

            <div className="detail__contents__banner__right">
              <InfoMovie dataInfo={dataMovie} />
              <div className="banner__button">
                <Button
                  onClick={() => {
                    handleTrailer(!trailer);
                  }}
                  variant="contained"
                  color="secondary"
                >
                  TRAILER
                </Button>

                <Button
                  onClick={() => {
                    history.push("/news");
                  }}
                  variant="contained"
                  color="secondary"
                >
                  NEWS
                </Button>
              </div>
            </div>
          </div>

          <div className="fade-bottom"></div>

          <div className="detail__video">
            {trailer ? (
              <iframe
                className="youtube"
                src={dataMovie?.trailer + "?autoplay=1"}
              />
            ) : (
              <> </>
            )}
          </div>
        </div>

        {/* BODY */}
        <div className="detail__contents__body">
          <div className="fade-top">
            <div className="fade-bottom"></div>
          </div>

          <div className="detail__contents__body__contents">
            {/* LOGO */}
            <div className="detail__contents__body__top">
              {/* <BrandList /> */}
              <Brand />
            </div>
            {/*  DETAIL*/}
            <div className="detail__contents__body__right">
              <div className="detail__contents__body__right__header">
                <table>
                  <tr>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td className="active">Thursday</td>
                    <td>Friday</td>
                    <td>Saturday</td>
                    <td>Sunday</td>
                    <Button
                      style={{ marginTop: 10 }}
                      variant="contained"
                      color="secondary"
                    >
                      Share
                    </Button>
                  </tr>

                  <tr>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td className="active">18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                  </tr>
                </table>
              </div>

              <div className="detail__contents__body__right__body">
                <div className="inner">
                  {cinemaList?.map((item) => {
                    return (
                      <DetailTime
                        name={item.tenCumRap}
                        address={item.diaChi}
                        img={item.hinhAnh}
                        lichChieuPhim={item.lichChieuPhim}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            // backgroundImage: `url("../../assets/images/cover-login.jpg")`,
            // height: "fit-content",
            // backgroundSize: "cover",
            backgroundColor: "#111111c1",
          }}
          className="detail__contents__footer"
        >
          <Footer
            style={
              {
                // color: "#fff",
              }
            }
          />
        </div>
      </div>
    </Container>
  );
}
export default Index;
