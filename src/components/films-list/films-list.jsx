import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmCard from '../film-card/film-card.jsx';


export const FilmsList = (props) => {
  const {films} = props;

  return (
    <div
      className="catalog__movies-list"
    >
      {films.map((film, ind) => <FilmCard
        key={ind}
        card={film}
      />)}
    </div>
  );
};

const filterFilms = (state) => {
  const {films, activeItem} = state;

  if (activeItem === `All Genre`) {
    return films;
  }

  return films.filter(({genre}) => genre === activeItem);
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: filterFilms(state),
});

export default connect(mapStateToProps)(FilmsList);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequred,
    src: PropTypes.string.isRequred,
    title: PropTypes.string.isRequred,
  }))
};
