import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 100px;
  display: flex;
  flex-direction: column;
  background: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

//-------------------------------------------------------
export const Top = styled.div`
  color: white;
  display: flex;

  /* Responsive - 4 */
  @media (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
  }
  /* Responsive - 5 */
  @media (min-width: 992px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  p {
    margin: 15px 0;
    padding-right: 17%;
  }
  input {
    background: transparent;
    border: none;
    outline: none;
    padding: 0 5px;
    color: #fff;
  }

  .homeReviews__top__left__button {
    Button {
      margin-top: 20px;
      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
`;

export const Right = styled.div`
  /* Responsive - 1 */
  @media (min-width: 0) and (max-width: 768px) {
    display: none;
  }
  /* Responsive - 2 */
  @media (min-width: 768px) and (max-width: 992px) {
    margin-top: 50px;
  }
  /* Responsive - 3 */
  @media (min-width: 992px) and (max-width: 1024px) {
    margin-top: 50px;
  }
`;
//-------------------------------------------------------

export const Bottom = styled.div`
  color: white;
  margin-top: 40px;
  .slick-slider {
    justify-content: center;
    align-items: center;
    .slick-list {
      .slick-track {
        .slick-slide {
        }
        padding: 15px 0;
        button {
          background: transparent;
          border: none;
        }
      }
    }
    .slick-dots {
      li {
        button {
          &::before {
            margin-top: 30px;
            color: white;
          }
        }
      }
    }

    // RESPONSIVE
    @media (min-width: 0) and (max-width: 320px) {
      display: none;
    }
  }
`;
