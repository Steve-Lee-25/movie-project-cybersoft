import styled from "styled-components";

export const Container = styled.div`
  padding: 0 50px;

  .formTicket__contents {
    .formTicket__contents__top {
      margin-bottom: 100px;
    }
    .formTicket__contents__bottom {
      Button {
        margin-top: 10px;
        width: 100%;
      }
    }
  }
`;

export const Row = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1.5px dashed;
  padding: 15px 0;

  h4 {
    span {
      color: #c01c21;
      padding-right: 5px;
    }
  }
`;
