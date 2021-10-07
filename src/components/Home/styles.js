import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  .home__header {
    & > div {
      position: fixed;
      z-index: 1;
      background: transparent;
    }
  }
  .home__header__show {
    & > div {
      transition: all 0.5s;
      position: fixed;
      z-index: 10;
      background: #111;
    }
  }
`;

export const Content = styled.div`
  background-color: #111;
`;
