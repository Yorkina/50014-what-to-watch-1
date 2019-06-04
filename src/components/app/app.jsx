import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import {checkSignInVisibility} from '../../reducer/user/selectors';
import SignIn from '../sign-in/sign-in.jsx';

export const App = (props) => {
  const {isSignInPage} = props;

  if (isSignInPage) {
    return <SignIn />;
  }

  return (
    <Main />
  );
};

App.propTypes = {
  isSignInPage: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isSignInPage: checkSignInVisibility(state),
});

export default connect(mapStateToProps)(App);
