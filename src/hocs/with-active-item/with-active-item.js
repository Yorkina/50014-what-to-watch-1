import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {ActionCreator} from '../../reducer/filters/filter';
import {getFilmsGenres} from '../../reducer/films/selectors';
import {getCurrentFilter} from '../../reducer/filters/selectors';


export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return WithActiveItem;
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    properties: getFilmsGenres(state),
    activeItem: getCurrentFilter(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActiveItem
);
