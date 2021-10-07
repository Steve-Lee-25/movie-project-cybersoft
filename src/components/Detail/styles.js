import styled from "styled-components";

export const Container = styled.div`
  .detail__contents {
    .detail__contents__header {
      & > div {
        position: fixed;
        z-index: 1;
        background: transparent;
      }
    }
    .detail__contents__header__show {
      & > div {
        position: fixed;
        z-index: 2;
        background: var(--black);
      }
    }

    .detail__contents__banner {
      height: 800px;
      height: fit-content;
      width: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: bottom blur(10px);
      .detail__video {
        display: flex;
        justify-content: center;
        background-color: #111;

        .youtube {
          border: none;

          /* Responsive - 1  */
          @media (min-width: 375px) and (max-width: 576px) {
            height: 248px;
            width: 360px;
          }

          /* Responsive - 2  */
          @media (min-width: 576px) and (max-width: 768px) {
            height: 370px;
            width: 510px;
          }

          /* Responsive - 3  */
          @media (min-width: 768px) and (max-width: 992px) {
            height: 390px;
            width: 690px;
          }

          /* Responsive - 4  */
          @media (min-width: 992px) and (max-width: 1200px) {
            height: 390px;
            width: 900px;
          }

          /* Responsive - 5  */
          @media (min-width: 1200px) and (max-width: 1400px) {
            height: 390px;
            width: 1200px;
          }

          /* Responsive - 6  */
          @media (min-width: 1400px) {
            height: 390px;
            width: 1200px;
          }
        }
      }

      .detail__contents__banner_inner {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 120px;
        padding-left: 150px;

        .detail__contents__banner__left {
        }

        .detail__contents__banner__right {
          padding-left: 42px;
          .banner__button {
            padding-top: 20px;
            Button {
              margin-right: 15px;
            }
          }
        }
        /* Responsive  - 1  */
        @media (min-width: 0px) and (max-width: 375px) {
          flex-direction: column;
          padding: 0;
          position: relative;

          .detail__contents__banner__left {
            width: 149px;
            position: absolute;
            left: 24%;
            top: 10%;
            @media (min-width: 280px) and (max-width: 375px) {
              left: 10%;
            }
          }

          .detail__contents__banner__right {
            padding-left: 0px;
            padding-top: 320px;
            .banner__button {
              padding-top: 0px;
              Button {
                margin-right: 15px;
              }
              @media (min-width: 0px) and (max-width: 375px) {
                padding: 15px 25px;
                Button {
                  span {
                    font-size: 9.5px;
                  }
                }
              }
            }
          }
        }

        /* Responsive  - 2  */
        @media (min-width: 375px) and (max-width: 576px) {
          flex-direction: column;
          padding: 0;
          position: relative;

          .detail__contents__banner__left {
            width: 172px;
            position: absolute;
            left: 37%;
            top: 9%;

            @media (min-width: 375px) and (max-width: 450px) {
              left: 31%;
            }
          }

          .detail__contents__banner__right {
            padding-top: 320px;
            padding-left: 25px;
            padding-right: 25px;

            .banner__button {
              padding-left: 27px;
            }

            Button {
              margin-right: 10px;
            }
            @media (min-width: 0px) and (max-width: 375px) {
              padding: 15px 25px;
              Button {
                span {
                  font-size: 8px;
                }
              }
            }
          }
        }

        /* Responsive  - 3  */
        @media (min-width: 576px) and (max-width: 768px) {
          flex-direction: column;
          padding: 0;
          position: relative;

          .detail__contents__banner__left {
            width: 183px;
            position: absolute;
            left: 37%;
            top: 9%;

            @media (min-width: 658px) and (max-width: 768px) {
              left: 39%;
            }
          }

          .detail__contents__banner__right {
            padding-top: 374px;
            padding-left: 25px;
            padding-right: 25px;
            Button {
              margin-right: 10px;
            }
            @media (min-width: 0px) and (max-width: 375px) {
              padding: 15px 25px;
              Button {
                span {
                  font-size: 8px;
                }
              }
            }
          }
        }

        /* Responsive  - 4  */
        @media (min-width: 768px) and (max-width: 992px) {
          flex-direction: row;
          padding: 0 20px;
          position: relative;

          .detail__contents__banner__left {
            width: 183px;
            position: absolute;
            left: 37%;
            top: 9%;

            @media (min-width: 800px) and (max-width: 992px) {
              left: 40%;
            }
          }

          .detail__contents__banner__right {
            padding-top: 374px;
            padding-left: 25px;
            padding-right: 25px;
            Button {
              margin-right: 10px;
            }
            @media (min-width: 0px) and (max-width: 375px) {
              padding: 15px 25px;
              Button {
                span {
                  font-size: 8px;
                }
              }
            }
          }
        }
      }

      .fade-bottom {
        position: sticky;
        z-index: 1;
        height: 7.4rem;
        background-image: linear-gradient(
          180deg,
          transparent,
          rgba(37, 37, 37, 0.61),
          #111
        );
      }
    }

    .detail__contents__body {
      height: fit-content;
      background: #111;
      color: #fff;

      .fade-top {
        height: 7.4rem;
        background-image: linear-gradient(
          720deg,
          transparent,
          rgba(37, 37, 37, 0.61),
          #111
        );

        .fade-bottom {
          z-index: 1;
          height: 7.4rem;
          background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            #111
          );
        }
      }
      .detail__contents__body__contents {
        height: fit-content;
        width: 100%;
        display: flex;
        padding: 50px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .detail__contents__body__top {
          height: 133px;
          width: 100%;
          margin-bottom: 150px;
        }
        .detail__contents__body__right {
          margin-top: 30px;
          width: 90%;
          border-left: 2px solid #80808042;

          .detail__contents__body__right__header {
            border: 2px solid #80808042;
            border-left: none;
            ::-webkit-scrollbar {
              width: 6px;
              height: 6px;
              background: white;
            }
            ::-webkit-scrollbar-track {
              border-radius: 10px;
              background: rgba(0, 0, 0, 0.1);
            }
            ::-webkit-scrollbar-thumb {
              border-radius: 10px;
              background: rgba(0, 0, 0, 0.2);
            }
            ::-webkit-scrollbar-thumb:hover {
              background: rgba(0, 0, 0, 0.4);
            }
            ::-webkit-scrollbar-thumb:active {
              background: rgba(0, 0, 0, 0.9);
            }
            table {
              tr {
                &:first-child {
                  Button {
                    margin-left: 30px;
                  }
                }
                &:nth-child(2) {
                  td {
                    text-align: center;
                  }
                }
                td {
                  padding: 10px;
                  font-weight: 500;

                  &:hover {
                    transition: all 0.1s;
                    color: #c22;
                  }
                }

                .active {
                  color: #c22;
                }
              }
            }
          }

          .detail__contents__body__right__body {
            .inner {
              height: 805px;
              padding-left: 20px;
              overflow-y: scroll;
              border-bottom: 2px solid #80808042;

              ::-webkit-scrollbar {
                width: 6px;
                height: 6px;
              }
              ::-webkit-scrollbar-track {
                border-radius: 10px;
                background: rgba(0, 0, 0, 0.1);
              }
              ::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: rgba(0, 0, 0, 0.2);
              }
              ::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.4);
              }
              ::-webkit-scrollbar-thumb:active {
                background: rgba(0, 0, 0, 0.9);
              }
            }
          }
        }
        /* Responsive - 1 */
        @media (min-width: 280px) and (max-width: 375px) {
          padding: 0;
          .detail__contents__body__left {
            border: none;
            padding-bottom: 30px;
            width: 100%;
          }
          .detail__contents__body__right {
            width: 100%;
            .detail__contents__body__right__header {
              overflow-x: scroll;
              table {
                tbody {
                  tr {
                    /* overflow-x: scroll; */
                    &:nth-child(2) {
                    }

                    td {
                    }
                  }
                }
              }
            }

            .detail__contents__body__right__body {
              .inner {
                padding: 0;
              }
            }
          }
        }

        /* Responsive - 2 */
        @media (min-width: 375px) and (max-width: 576px) {
          padding: 0;
          .detail__contents__body__left {
            border: none;
            padding-bottom: 30px;
            width: 100%;
          }
          .detail__contents__body__right {
            width: 100%;
            .detail__contents__body__right__header {
              overflow-x: scroll;
              table {
                tbody {
                  tr {
                    /* overflow-x: scroll; */
                    &:nth-child(2) {
                    }

                    td {
                    }
                  }
                }
              }
            }

            .detail__contents__body__right__body {
              .inner {
                padding: 0;
              }
            }
          }
        }

        /* Responsive - 3 */
        @media (min-width: 576px) and (max-width: 768px) {
          padding: 0;
          .detail__contents__body__left {
            border: none;
            padding-bottom: 30px;
            width: 100%;
          }
          .detail__contents__body__right {
            width: 100%;
            .detail__contents__body__right__header {
              overflow-x: scroll;
              table {
                tbody {
                  tr {
                    /* overflow-x: scroll; */
                    &:nth-child(2) {
                    }

                    td {
                    }
                  }
                }
              }
            }

            .detail__contents__body__right__body {
              .inner {
                padding: 0;
              }
            }
          }
        }

        /* Responsive - 4 */
        @media (min-width: 768px) and (max-width: 992px) {
          padding: 0;
          .detail__contents__body__left {
            border: none;
            padding-bottom: 30px;
            width: 100%;
          }
          .detail__contents__body__right {
            width: 100%;
            .detail__contents__body__right__header {
              overflow-x: scroll;
              table {
                tbody {
                  tr {
                    /* overflow-x: scroll; */
                    &:nth-child(2) {
                    }

                    td {
                    }
                  }
                }
              }
            }

            .detail__contents__body__right__body {
              .inner {
                padding: 0;
              }
            }
          }
        }

        /* Responsive - 5 */
        @media (min-width: 992px) and (max-width: 1200px) {
          padding: 0;
          .detail__contents__body__left {
            width: 100%;
          }
          .detail__contents__body__right {
            width: 100%;
            .detail__contents__body__right__header {
              overflow-x: scroll;
              table {
                tbody {
                  tr {
                    /* overflow-x: scroll; */
                    &:nth-child(2) {
                    }

                    td {
                    }
                  }
                }
              }
            }

            .detail__contents__body__right__body {
              .inner {
                padding: 0;
              }
            }
          }
        }
      }
    }
  }
  .detail__contents__footer {
    margin-top: 0px;
    @media (min-width: 280px) and (max-width: 1200px) {
      margin-top: 0px;
    }
  }
`;

export const Poster = styled.img`
  width: 295px;
  @media (min-width: 375px) and (max-width: 576px) {
    width: 310px;
  }
`;
