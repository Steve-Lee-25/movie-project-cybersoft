import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = styled(Slider)`
  overflow: hidden;
  margin: 0;
  .slick-next {
    right: 20px;
  }
  .slick-prev {
    left: 20px;
    z-index: 1;
  }
`;

export const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  .bLEpZH {
    position: absolute;
    top: 20px;
  }

  .InfoBanner {
    position: absolute;
    top: 35%;
    left: 120px;
    @media (min-width: 576px) and (max-width: 768px) {
      top: 10%;
    }
  }
  img {
    /* padding: 20px; */
    /* margin-top: 30px; */
    border: 4px solid transparent;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(
      0 0 0 / 69% 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px
    );
  }
`;
