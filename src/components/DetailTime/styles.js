import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  margin-bottom: 60px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 100px;
  height: 100px;
`;

export const Info = styled.div`
  margin-left: 60px;

  h3 {
    letter-spacing: 0.1px;
  }

  p {
    color: gray;
    font-weight: 300;
    Button {
      padding: 15px;
      .navLink {
        font-weight: 700;
        color: #c3273a;
        text-decoration: none;
        transition: all 0.5s;
        &:hover {
          color: #ffffff;
          font-style: italic;
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const Body = styled.div`
  table {
    margin-top: 10px;
    tr {
      td {
        &:first-child {
          display: flex;
          flex-direction: column;
          img {
            padding-top: 8px;
            width: 100px;
            height: 45px;
          }
        }
        &:nth-child(2) {
          padding: 0 50px;
          padding-right: 400px;
          /* background-color: black; */
          button {
            .navLink {
              color: #c3273a;
            }
          }
        }
      }
    }
  }
  /* Responsive - 1  */
  @media (min-width: 280px) and (max-width: 375px) {
    table {
      tr {
        td {
          &:nth-child(2) {
            padding: 0;
          }
        }
      }
    }
  }

  /* Responsive - 2  */
  @media (min-width: 375px) and (max-width: 576px) {
    table {
      tr {
        td {
          &:nth-child(2) {
            padding: 0;
          }
        }
      }
    }
  }

  /* Responsive - 3  */
  @media (min-width: 576px) and (max-width: 768px) {
    table {
      tr {
        td {
          &:nth-child(2) {
            padding: 0;
          }
        }
      }
    }
  }

  /* Responsive - 3  */
  @media (min-width: 768px) and (max-width: 992px) {
    table {
      tr {
        td {
          &:nth-child(2) {
            padding: 0;
          }
        }
      }
    }
  }

  /* Responsive - 4  */
  @media (min-width: 992px) and (max-width: 1200px) {
    table {
      tr {
        td {
          &:nth-child(2) {
            padding: 0;
          }
        }
      }
    }
  }

  /* Responsive - 5  */
  @media (min-width: 1200px) and (max-width: 1400px) {
    table {
      tr {
        td {
          &:nth-child(2) {
            padding: 0;
          }
        }
      }
    }
  }
`;
