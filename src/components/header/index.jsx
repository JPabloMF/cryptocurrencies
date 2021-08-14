import React from "react";
import {
  StyledHeader,
  StyledTitle,
  StyledInput,
  StyledList,
  StyledListItem,
} from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>CRYPTO</StyledTitle>
      <StyledInput placeholder='Search...'/>
      <StyledList>
        <StyledListItem active>Home</StyledListItem>
        <StyledListItem>Sell</StyledListItem>
        <StyledListItem>Buy</StyledListItem>
      </StyledList>
    </StyledHeader>
  );
};

export default Header;
