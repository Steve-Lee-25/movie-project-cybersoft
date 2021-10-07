import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-weight: 400;
    color: #fff;
    font-size: 80px;
  }
  p {
    width: 50%;
    margin-top: 20px;
    color: #fff;
    letter-spacing: 0.5px;
    font-weight: 300;
  }
  @media (min-width: 0) and (max-width: 576px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  Button {
    margin-right: 10px;
    font-weight: 600;
    height: 45px;
  }
  .MuiSvgIcon-root {
    color: white;
    margin-right: 10px;
    font-size: 25px;
  }
`;
