import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {checkIsAuthorizationRequired} from '../../reducer/user/selectors';

export const withProtectedRoute = (Route) => {
  const WithProtectedRoute = (props) => {
    const {isAuthorizationRequired, location} = props;

    if (isAuthorizationRequired) {
      return <Redirect push to={{
        pathname: `/login`,
        state: {
          from: location.pathname
        }
      }}/>;
    }

    return <Route {...props}/>;
  };

  WithProtectedRoute.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: checkIsAuthorizationRequired(state),
  });

  return connect(mapStateToProps)(WithProtectedRoute);
};
