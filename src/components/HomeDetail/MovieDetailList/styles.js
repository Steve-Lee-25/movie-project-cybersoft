import styled from "styled-components";

export const Container = styled.div`
  padding-left: 10px;
  width: 61%;
  height: 651px;
  overflow-y: scroll;
  border: 2px solid #8080802b;
  border-radius: 5px;

  /* total width */
  ::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 10px;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }

  //RESPONSIVE

  @media (min-width: 0) and (max-width: 768px) {
    width: 100%;
    ::-webkit-scrollbar {
      background: transparent;
      width: 15px;
    }
  }
`;

export const Top = styled.div``;

export const Poster = styled.div``;

export const Bottom = styled.div``;
