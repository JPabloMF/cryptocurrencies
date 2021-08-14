import styled from "styled-components";

export const StyledNewsContainer = styled.div`
  width: 230px;
  height: 350px;
  background-color: #1a2028;
  border-radius: 8px;
  border-left: 1px solid #fd9644;
  border-right: 1px solid #fd9644;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const StyledImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const StyledTitle = styled.h3`
  color: #fff;
  margin-bottom: 0;
`;

export const StyledDescription = styled.p`
  text-align: center;
  color: #fff;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  background-color: #fd9644;
  color: #fff;
  padding: 7px 10px;
  border-radius: 5px;
`;
