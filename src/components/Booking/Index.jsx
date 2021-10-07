import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Header from "../Header/Index";
import FormTicket from "../FormTicket/Index";
import StatusBooking from "../StatusBooking/Index";
import BookingItem from "./BookingItem/Index";
import request from "../../API/request";
import { useSelector } from "react-redux";

function Index({ props }) {
  const [show, handleShow] = useState(false);
  const timeCode = useSelector((state) => state.cinemaCode.MaLichChieu);
  const [dataMovie, setDataMovie] = useState();

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
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe",
      method: "GET",
      params: {
        MaLichChieu: timeCode,
      },
    })
      .then((res) => {
        setDataMovie(res.data.content);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Index.jsx ~ line 34 ~ useEffect ~ err =", err);
      });
  }, [show]);

  return (
    <Container
      style={{
        backgroundImage: `url("../../assets/images/backgroundBooking.jpg")`,
      }}
    >
      <div className="page__contents">
        <div
          className={`page__contents__header  ${
            show && "page__contents__header__show"
          }`}
        >
          <Header />
        </div>

        <div className="page__body">
          {/* HEADER POP UP  */}
          <div className="page__body__time">
            <h2>TIME</h2>
            <h3>{dataMovie?.thongTinPhim.gioChieu}</h3>
          </div>

          {/* BOOKING page  */}
          <div className="page__booking">
            <div className="page__booking__left">
              {/* Date  */}
              <p>
                {dataMovie?.thongTinPhim.gioChieu},
                {dataMovie?.thongTinPhim.diaChi}
              </p>
              {/* Pop-up booking */}
              <div className="page__booking__seats">
                {dataMovie?.danhSachGhe.map((item) => {
                  return <BookingItem key={item.maGhe} infoSeat={item} />;
                })}
              </div>
              {/* hint  */}
              <div className="page__booking__hints">
                <ul>
                  <li>
                    <StatusBooking color="gray" text="Normal" />
                  </li>
                  <li>
                    <StatusBooking color="#ff9900c7" text="VIP" />
                  </li>
                  <li>
                    <StatusBooking color="green" text="Selected" />
                  </li>
                  <li>
                    <StatusBooking color="#ff00006a" text="Full" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="page__booking__right">
              <FormTicket thongTinPhim={dataMovie?.thongTinPhim} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Index;
