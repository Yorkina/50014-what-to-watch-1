import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MainScreen from '../main/main.jsx';
import {getIsSignInPage} from '../../reducer/user/selectors';
import SignIn from '../sign-in/sign-in.jsx';

export const App = (props) => {
  const {isSignInPage} = props;

  if (true {
    return <SignIn />;
  }

  // return (
  //   <MainPage />
  // );
};

App.propTypes = {
  isSignInPage: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isSignInPage: getIsSignInPage(state),
});

export default connect(mapStateToProps)(App);

const App = () => {
  return <MainScreen/>;
};

export default App;
