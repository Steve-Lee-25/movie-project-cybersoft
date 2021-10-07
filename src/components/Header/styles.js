import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--black);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export const Logo = styled.img`
  height: 28px;
  width: 80px;
  margin: 20px;
`;

export const Auth = styled.div`
  padding-right: 20px;
  button {
    cursor: pointer;
    background: transparent;
    border: 1px solid #fff;
    font-weight: 700;
    border-radius: 6px;
    height: 29px;
    width: 81px;
    margin: 5px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    .auth {
      color: #fff !important;
    }
    &:hover {
      background-color: var(--white);
      color: var(--black);
      border: 1px solid var(--black);
    }
  }

  img {
    width: 50px;
  }
`;
