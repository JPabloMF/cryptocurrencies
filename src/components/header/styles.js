import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 50%;
  height: 60px;
  position: fixed;
  margin: 0 auto;
  top: 5%;
  background-color: #1a2028;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  border-left: 1px solid #fd9644;
  border-right: 1px solid #fd9644;
  @media (max-width: 768px) {
    width: 100%;
    top: 0;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }
`;

export const StyledTitle = styled.h2`
  color: #fff;
`;

export const StyledInput = styled.input`
  width: 50%;
  background-color: #34373b;
  border: none;
  border-radius: 8px;
  height: 40px;
  color: white;
  padding-left: 20px;
  font-size: 15px;
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const StyledListItem = styled.li`
  color: #fff;
  margin: 0 10px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#fd9644" : "transparent")};
  @media (max-width: 768px) {
    margin: 0 2px;
  }
`;