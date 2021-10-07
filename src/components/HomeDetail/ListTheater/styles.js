import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  border: 2px solid #8080802b;
  width: fit-content;
  border-radius: 5px;
  border-right: none;
  height: 651px;
  overflow-y: scroll;

  /* total width */
  ::-webkit-scrollbar {
    background: transparent;
    width: 6px;
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

  @media (min-width: 300px) and (max-width: 768px) {
    width: 100%;
    /* total width */
    ::-webkit-scrollbar {
      background: transparent;
      width: 15px;
    }
  }
`;
