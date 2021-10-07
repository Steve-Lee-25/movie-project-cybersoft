import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 300px;
  display: flex;
  flex-direction: row;
  height: 150px;
  width: 100%;
  background-color: black;

  /* Responsive - 1  */
  @media (min-width: 280px) and (max-width: 1200px) {
    padding: 10px 30px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  .contact__contents {
    color: gray;
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      li {
        margin-top: 10px !important;
        a {
          color: gray;
          padding-right: 10px;
          &:hover {
            transition: all 0.5s;
            color: black;
          }
        }
      }
    }
  }
`;
export const Law = styled.div`
  flex: 1;
  img {
    width: 178px;
  }

  /* Responsive - 1  */
  @media (min-width: 280px) and (max-width: 375px) {
    flex: 0;
    img {
      display: none;
    }
  }

  /* Responsive - 2  */
  @media (min-width: 375px) and (max-width: 576px) {
    flex: 1;
    img {
      display: none;
    }
  }

  /* Responsive - 3  */
  @media (min-width: 576px) and (max-width: 768px) {
    flex: 1;
    img {
      margin-left: 30px;
    }
  }

  /* Responsive - 4  */
  @media (min-width: 768px) and (max-width: 992px) {
    flex: 1;
    img {
      margin-left: 90px;
    }
  }

  /* Responsive - 5 */
  @media (min-width: 992px) and (max-width: 1200px) {
    flex: 1;
    img {
      margin-left: 40px;
    }
  }

  /* Responsive - 6 */
  @media (min-width: 1200px) and (max-width: 1700px) {
    flex: 1;
    img {
      margin-left: 105px;
    }
  }
`;
export const App = styled.div`
  color: gray;
  a {
    color: gray;
    padding: 5px;
    padding-left: 0;
    &:hover {
      transition: all 0.5s;
      color: black;
    }
  }

  p {
    padding-left: 4px;
    padding-bottom: 5px;
  }

  /* Responsive - 1 */
  @media (min-width: 280px) and (max-width: 375px) {
    .icon {
      display: flex;
    }
  }

  /* Responsive - 2 */
  @media (min-width: 992px) and (max-width: 1200px) {
    padding-left: 50px;
    .icon {
      display: flex;
    }
  }
`;
