import { Button } from "@material-ui/core";
import React from "react";
import { Container, Row } from "./styles";
import { useSelector } from "react-redux";
import request from "../../API/request";
import { useHistory } from "react-router-dom";

function Index({ thongTinPhim }) {
  const brand = thongTinPhim?.tenCumRap.split(" ");
  const seatCinema = useSelector((state) => state.infoSeat.seats);
  const bookingSeats = useSelector((state) => state.infoSeat.bookingSeat);
  const maLichChieu = useSelector((state) => state.cinemaCode.maLichChieu);

  const history = useHistory();
  // const demo = props.match.params;

  const handleClick = () => {
    history.push("/");
  };

  const totalPrice = (listBooking) => {
    let total = 0;
    for (let item of listBooking) {
      total = total + item.giaVe;
    }
    return total;
  };
  return (
    <Container>
      <div className="formTicket__contents">
        <div className="formTicket__contents__top">
          {/* ITEM  */}
          <Row>
            <p>Date Time </p>
            <h4>
              {thongTinPhim?.ngayChieu}
              <span style={{ paddingLeft: 10 }}>{thongTinPhim?.gioChieu}</span>
            </h4>
          </Row>
          {/* ITEM  */}
          <Row>
            <p>Theater Cluster</p>
            <h4>{thongTinPhim?.tenCumRap ? brand[0] : "NETFLIX"} Star</h4>
          </Row>
          {/* ITEM  */}
          <Row>
            <p>Theater </p>
            <h4>{thongTinPhim?.tenRap}</h4>
          </Row>
          {/* ITEM  */}
          <Row>
            <p>Seat </p>
            <div className="BookingSeat">
              {bookingSeats?.map((item) => {
                return (
                  <h4 style={{ display: "" }}>
                    <span>No.{item?.maGhe}</span>
                    {item?.giaVe}
                  </h4>
                );
              })}
            </div>
          </Row>
        </div>

        <div className="formTicket__contents__bottom">
          <Row>
            <p>Discount</p>
            <h4>0%</h4>
          </Row>

          <Row>
            <p>Total</p>
            <h4>{totalPrice(bookingSeats)}</h4>
          </Row>

          <Button
            onClick={() => {
              request({
                url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
                method: "POST",
                body: {
                  maLichChieu: maLichChieu,
                  danhSachVe: [bookingSeats],
                },
              })
                .then((res) => {
                  console.log(
                    "🚀 ~ file: Index.jsx ~ line 80 ~ .then ~ res",
                    res
                  );
                  handleClick();
                })
                .catch((err) => {
                  console.log(
                    "🚀 ~ file: Index.jsx ~ line 85 ~ Index ~ err",
                    err
                  );
                });
              handleClick();
            }}
            variant="contained"
            color="secondary"
          >
            BOOKING TICKET
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Index;
