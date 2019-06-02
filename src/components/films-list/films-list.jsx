import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmCard from '../film-card/film-card.jsx';
import withActiveCard from '../../hocs/with-active-card/with-active-card.js';
import {getFilteredFilms} from '../../reducer/films/selectors';


const WrappedActiveCard = withActiveCard(FilmCard);

export const FilmsList = (props) => {
  const {films} = props;

  return (
    <div
      className="catalog__movies-list"
    >
      {films.map((film, ind) => <WrappedActiveCard
        key={ind}
        card={film}
      />)}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getFilteredFilms(state),
});

export default connect(mapStateToProps)(FilmsList);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImageSrc: PropTypes.string,
    previewImageSrc: PropTypes.string,
    backgroundImageSrc: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scores: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    releasedYear: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoSrc: PropTypes.string,
    previewVideoSrc: PropTypes.string,
  })).isRequired,
};
