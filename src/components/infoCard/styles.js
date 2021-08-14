import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  width: 230px;
  height: 300px;
  background-color: #1a2028;
  border-radius: 8px;
  border-left: 1px solid #fd9644;
  border-right: 1px solid #fd9644;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 150px;
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 50px;
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledTitle = styled.h3`
  color: #fff;
  margin-bottom: 0;
  margin-top: 0;
`;

export const StyledDescription = styled.p`
  text-align: center;
  color: #fff;
  margin: 10px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  background-color: #fd9644;
  color: #fff;
  padding: 7px 10px;
  border-radius: 5px;
`;
