import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { apiRequest } from "../../store/actions";
import store from "../../store";

/* Components */
import Header from "../../components/header";
import Table from "../../components/table";
import Loader from "../../components/loader";
import InfoCard from "../../components/infoCard";
import {
  StyledContainer,
  StyledContentContainer,
  StyledTableContainer,
} from "./styles";

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
      <StyledContentContainer>
        <InfoCard
          price={!crypto.length ? "0.00" : crypto[0].DISPLAY.USD.PRICE}
        />
        <StyledTableContainer>
          {!crypto.length ? <Loader /> : <Table data={crypto} />}
        </StyledTableContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};

Main.defaultProps = {
  cryptos: {},
};

Main.propTypes = {
  cryptos: PropTypes.object,
};

const mapStateToProps = (state) => ({ cryptos: state.crypto.result });

export default connect(mapStateToProps)(Main);
