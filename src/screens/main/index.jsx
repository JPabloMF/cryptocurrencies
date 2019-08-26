import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Header from '../../components/header';

const Main = (props) => {
  return (
    <div>
      <Header />
    </div>
  );
};

Main.propTypes = {
  props: PropTypes.object.isRequired
};

export default Main;
