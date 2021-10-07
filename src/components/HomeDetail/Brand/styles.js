import styled from "styled-components";

export const Container = styled.div`
  .slick-slider {
    padding: 30px 0;
    padding-left: 50px;
    .slick-prev {
      z-index: 5;
      left: 70px;
    }
    .slick-arrow {
      z-index: 5;
      right: 70px;
    }
    .slick-list {
      margin-left: 190px;

      .slick-track {
        .slick-slide {
          div {
            button {
              background: transparent;
              border: none;
            }
            .BHDStar,
            .CGV,
            .CineStar,
            .Galaxy,
            .LotteCinima,
            .MegaGS {
              width: 32% !important;
              display: inline-block;
              background: radial-gradient(#d44343f2, transparent);
              border-radius: 44px;
            }
          }
        }
      }
    }
  }

  /* RESPONSIVE - 1*/
  @media (min-width: 0) and (max-width: 375px) {
    .slick-slider {
      padding: 0;
      .slick-prev {
        z-index: 5;
        left: 8px;
      }
      .slick-arrow {
        z-index: 5;
        right: 8px;
      }
      .slick-list {
        margin-left: 0;
        .slick-track {
          .slick-slide {
            div {
              button {
                div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    border: none;
                    width: 130px;
                  }
                }
              }
              .BHDStar,
              .CGV,
              .CineStar,
              .Galaxy,
              .LotteCinima,
              .MegaGS {
                width: 100% !important;
                display: inline-block;
                background: radial-gradient(#d44343f2, transparent);
                border-radius: 120px;
              }
            }
          }
        }
      }
    }
  }
  /* RESPONSIVE - 2  */
  @media (min-width: 375px) and (max-width: 576px) {
    .slick-slider {
      padding: 15px 0;
      .slick-prev {
        z-index: 5;
        left: 8px;
      }
      .slick-arrow {
        z-index: 5;
        right: 8px;
      }
      .slick-list {
        margin-left: 0;
        .slick-track {
          .slick-slide {
            div {
              button {
                div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    border: none;
                    width: 150px;
                  }
                }
              }
              .BHDStar,
              .CGV,
              .CineStar,
              .Galaxy,
              .LotteCinima,
              .MegaGS {
                width: 100% !important;
                display: inline-block;
                background: radial-gradient(#d44343f2, transparent);
                border-radius: 120px;
              }
            }
          }
        }
      }
    }
  }

  /* RESPONSIVE - 3  */
  @media (min-width: 576px) and (max-width: 768px) {
    .slick-slider {
      padding: 15px 0;
      .slick-prev {
        z-index: 5;
        left: 8px;
      }
      .slick-arrow {
        z-index: 5;
        right: 8px;
      }
      .slick-list {
        margin-left: 0;
        .slick-track {
          .slick-slide {
            div {
              button {
                div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    border: none;
                    width: 170px;
                  }
                }
              }
              .BHDStar,
              .CGV,
              .CineStar,
              .Galaxy,
              .LotteCinima,
              .MegaGS {
                width: 100% !important;
                display: inline-block;
                background: radial-gradient(#d44343f2, transparent);
                border-radius: 120px;
              }
            }
          }
        }
      }
    }
  }

  /* RESPONSIVE - 4  */
  @media (min-width: 768px) and (max-width: 992px) {
    .slick-slider {
      padding: 15px 0;
      .slick-prev {
        z-index: 5;
        left: 8px;
      }
      .slick-arrow {
        z-index: 5;
        right: 8px;
      }
      .slick-list {
        margin-left: 0;
        .slick-track {
          .slick-slide {
            div {
              button {
                div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    border: none;
                    width: 200px;
                    height: 200px;
                  }
                }
              }
              .BHDStar,
              .CGV,
              .CineStar,
              .Galaxy,
              .LotteCinima,
              .MegaGS {
                width: 80% !important;
                display: inline-block;
                background: radial-gradient(#d44343f2, transparent);
                border-radius: 120px;
              }
            }
          }
        }
      }
    }
  }

  /* RESPONSIVE - 5  */
  @media (min-width: 992px) and (max-width: 1200px) {
    .slick-slider {
      padding: 15px 0;
      .slick-prev {
        z-index: 5;
        left: 8px;
      }
      .slick-arrow {
        z-index: 5;
        right: 8px;
      }
      .slick-list {
        margin-left: 0;
        .slick-track {
          .slick-slide {
            div {
              button {
                div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    border: none;
                    width: 250px;
                    height: 250px;
                  }
                }
              }
              .BHDStar,
              .CGV,
              .CineStar,
              .Galaxy,
              .LotteCinima,
              .MegaGS {
                width: 100% !important;
                display: inline-block;
                background: radial-gradient(#d44343f2, transparent);
                border-radius: 120px;
              }
            }
          }
        }
      }
    }
  }

  /* RESPONSIVE - 5  */
  @media (min-width: 1200px) and (max-width: 1400px) {
    .slick-slider {
      padding: 15px 0;
      .slick-prev {
        z-index: 5;
        left: 8px;
      }
      .slick-arrow {
        z-index: 5;
        right: 8px;
      }
      .slick-list {
        margin-left: 0;
        .slick-track {
          .slick-slide {
            div {
              button {
                div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    border: none;
                    width: 250px;
                    height: 250px;
                  }
                }
              }
              .BHDStar,
              .CGV,
              .CineStar,
              .Galaxy,
              .LotteCinima,
              .MegaGS {
                width: 70% !important;
                display: inline-block;
                background: radial-gradient(#d44343f2, transparent);
                border-radius: 120px;
              }
            }
          }
        }
      }
    }
  }
`;

// @media (min-width : 0) and ( max-width : 375px) {}
// @media (min-width : 375px) and ( max-width : 576px) {}
// @media (min-width : 576px) and ( max-width : 768px) {}
// @media (min-width : 768px) and ( max-width : 992px) {}
// @media (min-width : 992px) and ( max-width : 1200px) {}
