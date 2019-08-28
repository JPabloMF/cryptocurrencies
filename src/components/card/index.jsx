import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #fff;
  width: 400px;
  border-radius: 3px;
  border: 1px solid #bdc3c7;
  margin-top: 40px;
`;

const StyledCardItem = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCardIconTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StyledValue = styled.span`
  color: ${(props) => (props.down ? '#e74c3c' : '#2ecc71')};
`;

const StyledImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const Card = ({
  name,
  fullName,
  price,
  change24hours,
  changehour,
  imageUrl
}) => {
  const validatePositiveNegativeChange = (value) => Number(value) < 0;

  return (
    <StyledCard>
      <StyledCardItem>
        <StyledCardIconTitle>
          <StyledImage
            src={`https://www.cryptocompare.com${imageUrl}`}
            alt={name}
          />
          <p>
            {name} | {fullName}
          </p>
        </StyledCardIconTitle>
        <p>{price}</p>
      </StyledCardItem>
      <StyledCardItem>
        <p>
          24h:{' '}
          <StyledValue down={validatePositiveNegativeChange(change24hours)}>
            {change24hours}%
          </StyledValue>
        </p>
        <p>
          7d:{' '}
          <StyledValue down={validatePositiveNegativeChange(changehour)}>
            {changehour}%
          </StyledValue>
        </p>
      </StyledCardItem>
    </StyledCard>
  );
};

Card.defaultProps = {
  name: 'initial value',
  fullName: 'initial value',
  price: 'initial value',
  change24hours: 'initial value',
  changehour: 'initial value',
  imageUrl: 'initial value'
};

Card.propTypes = {
  name: PropTypes.string,
  fullName: PropTypes.string,
  price: PropTypes.string,
  change24hours: PropTypes.string,
  changehour: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Card;
