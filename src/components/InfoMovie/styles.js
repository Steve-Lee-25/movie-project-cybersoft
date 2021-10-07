import styled from "styled-components";

export const Container = styled.div`
  color: white;

  @media (min-width: 375px) and (max-width: 375px) {
    margin-top: 300px;
  }
`;

export const Content = styled.div``;

export const Header = styled.h2`
  @media (min-width: 0px) and (max-width: 375px) {
    font-size: 19px;
    padding-left: 24px;
  }

  @media (min-width: 375px) and (max-width: 576px) {
    font-size: 34px;
    padding-left: 13px;
    padding-top: 40px;
    text-align: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 30px;
    padding-left: 29px;
    padding-top: 24px;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 30px;
    padding-top: 20px;
    text-align: center;
  }
`;

export const Describe = styled.p`
  text-align: justify;
  padding-right: 53%;
  margin: 20px 0;
  /* Responsive  - 1  */
  @media (min-width: 0px) and (max-width: 375px) {
    padding-right: 0%;
    padding: 0 25px;
    font-size: 12px;
    text-align: left;
  }

  /* Responsive  - 2  */
  @media (min-width: 375px) and (max-width: 576px) {
    text-align: center;
    padding: 0;
  }

  /* Responsive  - 3  */
  @media (min-width: 576px) and (max-width: 768px) {
    padding: 0;
    text-align: center;
  }

  /* Responsive  - 4  */
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0;
    text-align: center;
  }
`;

export const Body = styled.div`
  table {
    tr {
      td {
        padding: 10px 0;
        &:nth-child(2) {
          padding-left: 30px;
        }
      }
    }
    /* Responsive  - 1  */
    @media (min-width: 0px) and (max-width: 375px) {
      padding: 0 25px;
      tr {
        td {
          font-size: 12px;
          &:nth-child(2) {
          }
        }
      }
    }

    /* Responsive  - 2  */
    @media (min-width: 375px) and (max-width: 576px) {
      padding: 0 25px;
      tr {
        td {
          font-size: 16px;
          &:nth-child(2) {
          }
        }
      }
    }

    /* Responsive  - 3 */
    @media (min-width: 375px) and (max-width: 576px) {
      padding: 0 25px;
      tr {
        td {
          font-size: 16px;
          &:nth-child(2) {
          }
        }
      }
    }
  }
`;
