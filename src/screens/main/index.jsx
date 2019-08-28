import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { apiRequest } from '../../store/actions';
import store from '../../store';

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

const Main = ({ cryptos }) => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    store.dispatch(apiRequest());
  }, []);

  useEffect(() => {
    cryptos && cryptos.Data && setCrypto(cryptos.Data);
  }, [cryptos]);

  return (
    <StyledContainer>
      <Header />
      {!crypto.length ? (
        <p>Loading...</p>
      ) : (
        crypto.map(({ CoinInfo, DISPLAY }) => (
          <Card
            key={CoinInfo.Name}
            name={CoinInfo.Name}
            fullName={CoinInfo.FullName}
            price={DISPLAY.USD.PRICE}
            change24hours={DISPLAY.USD.CHANGEPCT24HOUR}
            changehour={DISPLAY.USD.CHANGEPCTHOUR}
            imageUrl={DISPLAY.USD.IMAGEURL}
          />
        ))
      )}
    </StyledContainer>
  );
};

Main.defaultProps = {
  cryptos: {}
};

Main.propTypes = {
  cryptos: PropTypes.object
};

const mapStateToProps = (state) => ({ cryptos: state.crypto.result });

export default connect(mapStateToProps)(Main);
