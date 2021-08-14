import React from "react";
import {
  StyledInfoContainer,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledLink,
} from "./styles";
import btcLogo from "../../assets/btc.png";

const InfoCard = ({ price }) => {
  return (
    <StyledInfoContainer>
      <StyledImage src={btcLogo} alt="bitcoin logo" />
      <StyledTitle>BITCOIN</StyledTitle>
      <StyledDescription>Bitcoin hits a new price!</StyledDescription>
      <StyledDescription>{price}</StyledDescription>
      <StyledLink href="https://bitcoin.org/en/">Read more</StyledLink>
    </StyledInfoContainer>
  );
};

export default InfoCard;
