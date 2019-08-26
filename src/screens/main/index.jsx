import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import Header from '../../components/header';
import Card from '../../components/card';

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Main = (props) => {
  return (
    <StyledContainer>
      <Header />
      <Card />
    </StyledContainer>
  );
};

Main.propTypes = {
  props: PropTypes.object.isRequired
};

export default Main;
