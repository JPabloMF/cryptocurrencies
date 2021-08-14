import styled from 'styled-components';

export const StyledCardIconTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledValue = styled.span`
  color: ${(props) => (props.down ? "#e74c3c" : "#2ecc71")};
`;

export const StyledImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 50px;
`;

export const StyledTh = styled.th`
  color: #fff;
  padding-right: 20px;
  padding-bottom: 10px;
  text-align: left;
  font-size: 20px;
`;

export const StyledTd = styled.td`
  color: #fff;
  text-align: left;
  padding-right: 50px;
  &:first-child {
    padding-left: 10px;
  }
`;

export const StyledTr = styled.tr`
  border-radius: 5px;
  background-color: #1a2028;
  &:nth-child(even) {
    background-color: #293039;
  }
`;