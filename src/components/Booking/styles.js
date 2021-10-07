import styled from "styled-components";

export const Container = styled.div`
  color: white;
  height: 1200px;
  background-size: cover;
  background: center center;
  width: 100%;
  @media (max-width: 768px) {
    height: 2400px;
  }

  .page__contents {
    position: relative;
    .page__contents__header {
      width: 100%;
      position: fixed;
      z-index: 1;
      div {
        background: transparent;
      }
    }
    .page__contents__header__show {
      background: #111;
    }
    .page__body {
      padding-bottom: 50px;
      padding-top: 50px;
      position: absolute;
      top: 100px;
      left: 22%;
      height: fit-content;
      width: 940px;
      border-radius: 10px;
      background-color: var(--blackTransparent);
      display: flex;
      flex-direction: column;
      align-items: center;
      letter-spacing: 1.5px;
      @media (max-width: 768px) {
        height: 2322px;
      }

      .page__body__time {
        text-align: center;
      }

      .page__booking {
        display: flex;
        width: 100%;
        height: 100%;
        .page__booking__left {
          /* background-color: white; */
        }
        .page__booking__left,
        .page__booking__right {
          width: 50%;
        }

        .page__booking__left {
          p {
            padding: 0 30px;
            padding-left: 45px;
            font-size: 15px;
          }
          .page__booking__seats {
            width: 100%;
            /* background: whitesmoke; */
            height: 500px;
            padding-left: 40px;
            .active {
              background-color: #ff00006a !important;
              border: none !important;
              transform: scale(1) !important;
            }
            .Vip {
              background-color: orange;
            }
            .btnClick {
              border: 2px solid #fff;
              transform: scale(1.4);
            }

            @media (min-width: 0) and (max-width: 576px) {
              padding-left: 20px;
            }
          }
          .page__booking__hints {
            ul {
              list-style: none;
            }
            @media (min-width: 0) and (max-width: 320px) {
              margin-top: 250px;
            }

            @media (min-width: 320px) and (max-width: 430px) {
              margin-top: 220px;
            }
          }
        }
      }

      .page__body__time {
        h3 {
          color: #c01c21;
          font-size: 27px;
        }
      }

      @media (max-width: 576px) {
        height: 1500px;
        width: 100%;
        left: 0;
        top: 0;

        .page__body__time {
          margin-top: 100px;
          text-align: center;
        }

        .page__booking {
          display: flex;
          flex-direction: column;
          .page__booking__right,
          .page__booking__left {
            width: auto;
            margin-top: 20px;
          }
        }
      }

      @media (min-width: 576px) and (max-width: 768px) {
        left: 25%;
        width: 50%;
        .page__booking {
          display: flex;
          flex-direction: column;
          .page__booking__right,
          .page__booking__left {
            width: auto;
            margin-top: 20px;
          }
        }
      }

      @media (min-width: 768px) and (max-width: 992px) {
        top: 120px;
        left: 3%;
        width: 90%;
        margin: 0 20px;
      }
      @media (min-width: 992px) and (max-width: 1200px) {
        top: 120px;
        left: 12%;
        width: 80%;
      }
      @media (min-width: 1200px) and (max-width: 1400px) {
        top: 120px;
        left: 12%;
        width: 80%;
      }
    }
  }
`;
