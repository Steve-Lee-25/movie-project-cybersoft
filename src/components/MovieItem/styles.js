import styled from "styled-components";

export const Container = styled.div`
  height: 306px;
  width: 250px;
  margin-top: 20px;
  padding: 0 10px;
  cursor: pointer;

  @media (min-width: 0) and (max-width: 375px) {
    display: none;
  }

  &:hover {
    transition: all 0.5s;
    transform: scale(1.09);
  }

  .movieItem_describe {
    h4 {
      color: #fff;
      text-align: center;
      font-weight: 350;
      font-size: 23px;
    }

    p {
      text-align: right;
      .MuiSvgIcon-root {
        font-size: 20px;
        color: #f2af3a;
      }
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
`;
