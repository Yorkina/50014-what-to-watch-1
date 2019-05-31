
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {actionCreator} from '../../reducer';

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
    properties:
      state.films.reduce((accum, film) => {
        if (accum.indexOf(film.genre) === -1) {
          accum.push(film.genre);
        }
        return accum;
      }, []),
    activeItem: state.activeItem,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (genre) => {
    dispatch(actionCreator.changeGenre(genre));
  },
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActiveItem
);
