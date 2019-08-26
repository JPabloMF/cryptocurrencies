import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #a55eea;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Header = () => {
  return <StyledHeader>CRYPTOCURRENCIES</StyledHeader>;
};

export default Header;
