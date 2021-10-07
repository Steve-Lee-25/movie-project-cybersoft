import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  cursor: pointer;

  img {
    border: 2px solid #e30813;
    border-radius: 40px;
    height: 165px;
    background: transparent;
    padding: 30px;
    transition: all 0.5s;
    width: fit-content;
    &:hover {
      transform: scale(1.05);
      border-radius: 80px;
      padding: 10px;
    }
  }
`;
