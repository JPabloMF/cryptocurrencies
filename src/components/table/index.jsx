import React from "react";
import PropTypes from "prop-types";
import {
  StyledCardIconTitle,
  StyledValue,
  StyledImage,
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
} from "./style";

const Table = ({ data }) => {
  const validatePositiveNegativeChange = (value) => Number(value) < 0;

  return (
    <StyledTable>
      <thead>
        <StyledTh>Currencie</StyledTh>
        <StyledTh>Price</StyledTh>
        <StyledTh>Change (24h)</StyledTh>
      </thead>
      <tbody>
        {data.map(({ CoinInfo, DISPLAY }) => (
          <StyledTr>
            <StyledTd>
              {" "}
              <StyledCardIconTitle>
                <StyledImage
                  src={`https://www.cryptocompare.com${DISPLAY.USD.IMAGEURL}`}
                  alt={CoinInfo.Name}
                />
                <p>
                  {CoinInfo.Name} | {CoinInfo.FullName}
                </p>
              </StyledCardIconTitle>
            </StyledTd>
            <StyledTd>{DISPLAY.USD.PRICE}</StyledTd>
            <td>
              <StyledValue
                down={validatePositiveNegativeChange(
                  DISPLAY.USD.CHANGEPCT24HOUR
                )}
              >
                {DISPLAY.USD.CHANGEPCT24HOUR}%
              </StyledValue>
            </td>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

Table.defaultProps = {
  name: "initial value",
  fullName: "initial value",
  price: "initial value",
  change24hours: "initial value",
  changehour: "initial value",
  imageUrl: "initial value",
};

Table.propTypes = {
  name: PropTypes.string,
  fullName: PropTypes.string,
  price: PropTypes.string,
  change24hours: PropTypes.string,
  changehour: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Table;
