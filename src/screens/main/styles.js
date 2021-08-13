import styled from "styled-components";
import background from "../../assets/background.png";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 60px;
  padding: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-image: url(${background});
  background-size: 100% 100%;
`;
