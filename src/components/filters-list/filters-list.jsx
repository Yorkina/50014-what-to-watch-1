import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actionCreator} from '../../reducer';


export const FiltersList = (props) => {
  const {properties, currentFilter, changeFilter} = props;
  const filters = [`All Genre`, ...properties];

  return (
    <ul className="catalog__genres-list">
      {filters.map((filter) => {
        const isActive = filter === currentFilter;

        return (
          <li
            key={filter}
            className={`catalog__genres-item ${isActive && `catalog__genres-item--active`}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();

                if (!isActive) {
                  changeFilter(filter);
                }
              }}
            >
              {filter}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    properties:
      state.films
        .map((film) => film.genre)
        .filter((genre, ind, arr) => arr.indexOf(genre) === ind),
    currentFilter: state.currentFilter,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (genre) => {
    dispatch(actionCreator.changeGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);

FiltersList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
