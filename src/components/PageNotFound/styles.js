import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #161616;
  transition: 1s;
  .logoHeader {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 800;
    font-size: 86px;

    .logo {
      padding-right: 30px;
      position: relative;
      display: inline-block;
      bottom: -20px;
      color: #e01;
    }
    .copyright {
      padding-top: 40px;
      text-align: center;
      padding-right: 50px;
      font-size: 72px;
    }
    .switch {
      text-align: center;
      margin-left: 40%;
      text-decoration: none;
      color: #e01;
      font-size: 50px;
      background-color: white;
      border-radius: 10px;
      padding: 0 10px;
      transition: all 0.5s;
      &:hover {
        transition: all 0.4s;
        color: #fff;
        background: #e01;
      }
    }
  }
`;
