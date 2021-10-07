import styled from "styled-components";

export const Container = styled.div`
  color: white;
  width: 350px;
  margin-top: 30px;

  /* Responsive  -  1 */
  @media (min-width: 0) and (max-width: 375px) {
    width: 250px;
    padding-left: 15px;
  }

  /* Responsive  -  2 */
  @media (min-width: 576px) and (max-width: 768px) {
    width: 300px;
    padding-left: 25px;
  }

  /* Responsive  -  3 */
  @media (min-width: 768px) and (max-width: 992px) {
    width: 280px;
  }

  /* Responsive  -  4 */
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 270px;
  }
  /* Responsive  -  4 */
  @media (min-width: 1200px) and (max-width: 1500px) {
    width: 240px;
  }

  p {
    width: auto;
    color: gray;
    @media (min-width: 768px) and (max-width: 992px) {
      width: 250px;
    }
  }
`;

export const Logo = styled.img`
  width: 350px;

  @media (min-width: 0) and (max-width: 375px) {
    width: 250px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 350px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 250px;
  }

  /* Responsive  -  4 */
  @media (min-width: 992px) and (max-width: 1200px) {
    width: 250px;
  }

  /* Responsive - 5  */
  @media (min-width: 1200px) and (max-width: 1500px) {
    width: 250px;
  }
`;
