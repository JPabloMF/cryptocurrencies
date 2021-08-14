import styled from "styled-components";
import background from "../../assets/background.jpg";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px;
  padding-top: 150px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-image: url(${background});
  background-size: 100% 100%;
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTableContainer = styled.div`
  width: 100%;
`;