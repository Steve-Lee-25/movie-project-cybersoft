import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 20px;
  background: #111;
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;

  @media (min-width: 0) and (max-width: 375px) {
    flex-direction: column;
  }
  @media (min-width: 375px) and (max-width: 576px) {
    flex-direction: column;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 992px) and (max-width: 1200px) {
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
  }
`;
