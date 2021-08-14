import React from "react";
import {
  StyledNewsContainer,
  StyledImage,
  StyledTitle,
  StyledDescription,
  StyledLink,
} from "./styles";
import btcLogo from "../../assets/btc.png";

const InfoCard = () => {
  return (
    <StyledNewsContainer>
      <StyledImage src={btcLogo} alt="bitcoin logo" />
      <StyledTitle>BITCOIN</StyledTitle>
      <StyledDescription>
        Bitcoin uses peer-to-peer technology to operate with no central
        authority or banks.
      </StyledDescription>
      <StyledLink href="https://bitcoin.org/en/">Read more</StyledLink>
    </StyledNewsContainer>
  );
};

export default InfoCard;
