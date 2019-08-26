import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #fff;
  width: 300px;
  border-radius: 3px;
  border: 1px solid #bdc3c7;
`;

const StyledCardItem = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCardIconTitle = styled.div`
  display: flex;
`;

const StyledValue = styled.span`
  color: ${(props) => (props.down ? '#e74c3c' : '#2ecc71')};
`;

const Card = (props) => {
  return (
    <StyledCard>
      <StyledCardItem>
        <StyledCardIconTitle>
          <img src='' alt='' />
          <p>XRP | Ripple</p>
        </StyledCardIconTitle>
        <p>298.000 $</p>
      </StyledCardItem>
      <StyledCardItem>
        <p>
          24h: <StyledValue>1.15%</StyledValue>
        </p>
        <p>
          7d: <StyledValue>-1.5%</StyledValue>
        </p>
      </StyledCardItem>
    </StyledCard>
  );
};

Card.propTypes = {
  props: PropTypes.object.isRequired
};

export default Card;
