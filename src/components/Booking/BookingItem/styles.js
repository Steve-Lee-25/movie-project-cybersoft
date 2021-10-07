import styled from "styled-components";

export const Container = styled.button`
  margin: 5px;
  height: 25px;
  width: 25px;
  border-radius: 3.5px;
  border: none;
  background-color: #8080808a;
  outline-color: white;
  transition: all 0.18s;

  &:hover {
    transform: scale(1.5);
  }
`;
