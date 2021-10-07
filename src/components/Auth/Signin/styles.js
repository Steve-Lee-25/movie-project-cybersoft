import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.8s;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 1200px;
  position: relative;
`;
export const Logo = styled.img`
  position: absolute;
  width: 333px;
  height: 103px;
  top: 233px;
  left: 167px;
  background-image: linear-gradient(
    250deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    var(--blackBlur)
  );
  filter: blur(0.5 px);

  @media (min-width: 280px) and (max-width: 375px) {
    width: 200px;
    height: 76px;
    top: 84px;
    left: 21%;
  }
  @media (min-width: 375px) and (max-width: 576px) {
    width: 280px;
    height: 69px;
    top: 115px;
    left: 18%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 296px;
    height: 79px;
    top: 100px;
    left: 158px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    width: 394px;
    height: 93px;
    top: 100px;
    left: 27%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 394px;
    height: 93px;
    top: 100px;
    left: 310px;
  }
`;
export const FormLogin = styled.div`
  position: absolute;
  right: 12%;
  top: 10%;
  height: 600px;
  width: 448px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--blackTransparent);
  border-radius: 8px;
  .formLogin__content {
    margin-top: 68px;
    color: var(--white);

    h1 {
      margin-bottom: 40px;
    }

    .formLogin__input {
      display: flex;
      flex-direction: column;
      .formLogin__inputItem {
        margin: 10px 0;
        height: 46px;
        width: 100%;
        border: none;
        outline: none;
        border-radius: 4px;
        padding: 0 13px;
        background: #4b4a4acc;
        color: white;
        padding-right: 42px;
      }
      .formLogin__password {
        position: relative;
        button {
          position: absolute;
          right: 3px;
          top: 0.5px;
          background: transparent;
          border: none;
          color: #0000007a;
          &:hover {
            transition: all 0.5s;
            cursor: pointer;
            color: white;
          }
        }
      }
      Button {
        margin-top: 20px;
      }
    }

    .formLogin__text {
      margin-top: 20px;
      .auth {
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        text-decoration: underline;
        transition: all 0.5s;
        &:hover {
          color: #e22;
          transition: all 0.3s;
        }
      }
    }
  }

  @media (min-width: 280px) and (max-width: 375px) {
    right: 8%;
    top: 27%;
    height: 490px;
    width: 268px;
  }
  @media (min-width: 375px) and (max-width: 576px) {
    right: 8%;
    top: 27%;
    height: 490px;
    width: 293px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    right: 11%;
    top: 28%;
    height: 490px;
    width: 418px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    right: 13%;
    top: 30%;
    height: 490px;
    width: 531px;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    right: 28%;
    top: 35%;
  }
`;
