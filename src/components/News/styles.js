import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .news__header {
    .blYorP {
      z-index: 1;
      background: transparent;
      position: fixed;
      .fRacOR {
        button {
          border: 0.1px solid black;
          color: black;
        }
      }
    }
  }
  .news__header__show {
    .blYorP {
      background: #111;
      .fRacOR {
        button {
          border: 1px solid #fff;
          color: white;
          &:hover {
            color: #111;
          }
        }
      }
    }
  }

  .news__content {
    background-color: #181818;
  }

  .iiEaux {
    background: #111;
  }
`;

export const Banner = styled.div`
  background-image: url("../../assets/images/banner__news.jpg");
  background-size: cover;
  background-position: center center;
  height: 1000px;
  width: 100%;
  position: sticky;

  .fade-left {
    height: 1000px;
    background-image: linear-gradient(
      275deg,
      transparent,
      rgba(42, 37, 37, 0.61),
      #111
    );
    @media (min-width: 0) and (max-width: 768px) {
      background-image: linear-gradient(
        184deg,
        transparent,
        rgba(42, 37, 37, 0.61),
        #111
      );
    }
  }
  .news__banner__content {
    position: absolute;
    top: 200px;
    left: 9%;
  }
`;

export const Logo = styled.img`
  width: 502px;
  height: 233px;
  @media only screen and (min-width: 0) and (max-width: 375px) {
    width: 238px;
    height: 115px;
  }
  @media only screen and (min-width: 375px) and (max-width: 576px) {
    width: 310px;
    height: 153px;
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 387px;
    height: 189px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 400px;
    height: 195px;
  }
`;

export const Detail = styled.div`
  margin-top: 50px;
  h2 {
    color: var(--white);
  }
  p {
    color: whitesmoke;
    &:nth-child(2) {
      margin: 10px 0;
      font-size: 15px;
      span {
        color: lightgray;
        padding: 0 5px;
        &:first-child {
          border-right: 1.5px solid lightgray;
          padding-right: 10px;
        }

        &:nth-child(2) {
          border: 0.2px solid lightgray;
          margin: 0 15px;
        }

        &:nth-child(3) {
          border-left: 1.5px solid lightgray;
          padding: 0 10px;
        }

        &:nth-child(4) {
          border-left: 1.5px solid lightgray;
          padding-left: 10px;
        }
      }
    }

    &:nth-child(3) {
      width: 50%;
      padding-right: 50px;
      margin: 10px 0;
      @media only screen and (min-width: 0) and (max-width: 375px) {
        width: 100%;
      }
      @media only screen and (min-width: 375px) and (max-width: 576px) {
        width: 100%;
      }
    }

    &:nth-child(4),
    &:nth-child(5) {
      span {
        margin-left: 8px;
        color: lightgray;
      }
    }
  }
`;

export const InfoNews = styled.div`
  height: fit-content;
  margin: 0 80px;
  @media (min-width: 0) and (max-width: 576px) {
    margin: 0 20px;
  }

  .nav-top-infoNews {
    background-color: #80808061;
    display: flex;
    margin-top: 50px;
    align-items: center;
    border-radius: 7px;
    @media (min-width: 0) and (max-width: 375px) {
      justify-content: space-between;
    }
    .nav-top-infoNews__left {
      width: 48px;
      height: 61px;
      padding: 10px;
    }
    p {
      flex: 1;
      color: #fff;
      @media (min-width: 0) and (max-width: 375px) {
        display: none;
      }
    }
    .nav-top-infoNews_right {
      cursor: pointer;
      border: none;
      color: #fff;
      background-color: #ff0000;
      font-weight: 500;
      border-radius: 3px;
      height: 31px;
      width: 106px;
      margin-right: 24px;
      &:hover {
        background-color: #ff3e3e;
      }
    }
  }

  .infoNews__copyRight {
    color: gray;
    text-align: center;
    margin-top: 91px;
    padding: 1% 33%;
    border: 0.5px solid #80808070;
    border-right: none;
    border-left: none;
    @media (min-width: 0) and (max-width: 992px) {
      padding: 0;
      padding: 5px 0;
    }
  }

  .InfoNews__body {
    .InfoNews__body__header {
      display: flex;
      align-items: center;
      margin-top: 50px;
      color: var(--white);
      h1 {
        font-weight: 500;
        padding-right: 10px;
      }
      h4 {
        border-left: 1px solid gray;
        font-size: 24px;
        padding-left: 10px;
        font-weight: 350;
        color: gray;
        @media (min-width: 0) and (max-width: 576px) {
          font-size: 17px;
        }
      }
    }

    select {
      cursor: pointer;
      background: transparent;
      color: white;
      border: none;
      outline: none;
      font-size: 15px;
      margin-top: 15px;
      option {
      }
    }

    .InfoNews__body__release {
      h4 {
        color: white;
        margin-top: 25px;
      }
      p {
        color: gray;
        width: 32%;
        margin-top: 10px;
        @media (min-width: 0) and (max-width: 992px) {
          width: 100%;
        }
      }
    }

    .InfoNews__body__item {
      cursor: pointer;
      margin-top: 40px;
      display: grid;
      grid-template-columns: 22% 22% 22% 22%;
      padding-left: 110px;
      gap: 10px;

      /* Responsive  -  1 */
      @media (min-width: 0) and (max-width: 375px) {
        padding-left: 4%;
        display: flex;
        flex-direction: column;
      }

      /* Responsive  -  2 */
      @media (min-width: 375px) and (max-width: 576px) {
        padding-left: 6%;
        display: flex;
        flex-direction: column;
      }

      /* Responsive  -  3 */
      @media (min-width: 576px) and (max-width: 768px) {
        padding-left: 10%;
        display: flex;
        flex-direction: column;
      }

      /* Responsive  -  4 */
      @media (min-width: 768px) and (max-width: 992px) {
        padding-left: 0;
        display: grid;
        grid-template-columns: 45% 45%;
      }

      /* Responsive  -  5 */
      @media (min-width: 992px) and (max-width: 1200px) {
        padding-left: 0%;
        display: grid;
        grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
      }

      /* Responsive - 6 */
      @media (min-width: 1200px) and (max-width: 1500px) {
      }
    }

    .InfoNews__body__MoreDetail {
      color: white;
      margin-top: 50px;
      padding-left: 110px;
      .InfoNews__body__MoreDetail__cast {
        p {
          margin: 20px 0;
          color: gray;
          font-weight: 500;
        }
        .InfoNews__body__MoreDetail__cast__actor {
          display: grid;
          grid-template-columns: 22% 22% 22% 22%;
          gap: 10px;
          .InfoNews__body__MoreDetail__cast__actor-item {
            cursor: pointer;
            &:hover {
              color: gray;
              transition: all 0.2s;
            }
          }
        }
      }
      /* Responsive - 1  */
      @media (min-width: 0) and (max-width: 375px) {
        padding-left: 20px;
      }
      /* Responsive - 2  */
      @media (min-width: 375px) and (max-width: 576px) {
        padding-left: 20px;
      }
      /* Responsive - 3  */
      @media (min-width: 576px) and (max-width: 768px) {
        padding-left: 60px;
      }
      /* Responsive - 4  */
      @media (min-width: 768px) and (max-width: 992px) {
        padding-left: 0;
      }
      /* Responsive - 5  */
      @media (min-width: 992px) and (max-width: 1200px) {
        padding-left: 0;
      }
    }

    .InfoNews__body__MoreLikeThis {
      margin-top: 50px;
      padding-left: 110px;
      cursor: pointer;
      h1 {
        color: white;
        margin: 15px 0;
      }
      .InfoNews__body__MoreLikeThis__item {
        .InfoNews__body__MoreLikeThis__item__img {
          width: 300px;
          height: 180px;
          padding: 10px;
        }
      }
      /* Responsive - 1  */
      @media (min-width: 0) and (max-width: 375px) {
        padding-left: 20px;
      }
      /* Responsive - 2  */
      @media (min-width: 375px) and (max-width: 576px) {
        padding-left: 20px;
      }
      /* Responsive - 3  */
      @media (min-width: 576px) and (max-width: 768px) {
        padding-left: 60px;
      }
      /* Responsive - 4  */
      @media (min-width: 768px) and (max-width: 992px) {
        padding-left: 0;
      }
      /* Responsive - 5  */
      @media (min-width: 992px) and (max-width: 1200px) {
        padding-left: 0;
      }
    }

    .InfoNews__body__comingSoon {
      padding: 40px 0;
      h1 {
        color: whitesmoke;
      }
      .InfoNews__body__comingSoon_item {
        cursor: pointer;
        margin-top: 40px;
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        gap: 20px;
        padding-left: 120px;
      }
      /* Responsive - 1 */
      @media (min-width: 0) and (max-width: 375px) {
        padding-left: 20px;
        .InfoNews__body__comingSoon_item {
          grid-template-columns: 25% 25% 25%;
          padding-left: 10px;
        }
      }
      /* Responsive - 2 */
      @media (min-width: 375px) and (max-width: 576px) {
        padding-left: 20px;
        .InfoNews__body__comingSoon_item {
          grid-template-columns: 25% 25% 25%;
          padding-left: 10px;
        }
      }
      /* Responsive - 3 */
      @media (min-width: 576px) and (max-width: 768px) {
        padding-left: 20px;
        .InfoNews__body__comingSoon_item {
          grid-template-columns: 25% 25% 25%;
          padding-left: 10px;
        }
      }
      /* Responsive - 4 */
      @media (min-width: 768px) and (max-width: 992px) {
        padding-left: 20px;
        .InfoNews__body__comingSoon_item {
          padding-left: 10px;
        }
      }
      /* Responsive - 5 */
      @media (min-width: 992px) and (max-width: 1200px) {
      }
    }
  }
`;

// LƯU Ý : thuộc tính nth-child() : này thì nó sẽ so sánh với hệ quy chiếu cha con nếu nó nằm
// trong một thẻ div có 1 thẻ a và 4 thẻ p thì khi đó truy xuất trở thành hệ quy chiếu cha con giữa div a p
