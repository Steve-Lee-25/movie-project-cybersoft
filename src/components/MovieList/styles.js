import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 100px;
  margin-bottom: 100px;
  @media (min-width: 0) and (max-width: 1600px) {
    display: none;
  }

  .nav {
    height: 40px;
    line-height: 40px;
    .active {
    }

    li {
      .active {
        height: fit-content;
        transition: all 1s;
        background: #e13239;
        border: 1px solid #fff;
      }

      a {
        text-decoration: none;
        border: none;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        color: white;
        font-weight: 600;
        border-radius: 7px;
        margin-left: 8px;
        transition: all 0.5s;

        &:hover {
          transition: all 0.5s;
          background: #e13239;
          border: 2px solid white;
        }
      }
      transition: all 0.5s;
      &:hover {
        .news {
          background: #e13239;
          border: 2px solid white;
        }
      }
    }
  }

  .nav-tabs {
    height: 50px;
    /* padding-bottom: 20px; */
    border-color: #80808047;
  }

  .tab-content {
    margin-top: 20px;
    l #home {
      overflow: hidden;
      .slick-track {
        height: 450px;
      }

      .slick-slider {
        position: relative;
        .slick-dots {
          display: none !important;
        }
        .slick-arrow {
          z-index: 1;
          display: block;
          border-radius: 151px;
          &:hover {
            opacity: 0.9;
          }
        }
        .slick-next {
          position: absolute;
          right: 24px !important;
        }
        .slick-prev {
          position: absolute;
          left: 24px !important;
        }
      }
    }
    #menu1 {
      .slick-track {
        height: 450px;
      }

      .slick-slider {
        position: relative;
        .slick-dots {
          display: none !important;
        }
        .slick-arrow {
          z-index: 1;
          display: block;
          border-radius: 151px;
          &:hover {
            opacity: 0.9;
          }
        }
        .slick-next {
          position: absolute;
          right: 24px !important;
        }
        .slick-prev {
          position: absolute;
          left: 24px !important;
        }
      }
    }
  }
`;
