import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';


export const FilmCard = (props) => {
  const {card, isPlaying, onTitleClick, onMouseEnter, onMouseLeave} = props;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    <div className="small-movie-card__image">
      <VideoPlayer
        src={card.previewVideoSrc}
        preview={card.previewImageSrc}
        isPlaying={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" onClick={onTitleClick} href={card.href}>{card.name}</a>
    </h3>
  </article>;
};


FilmCard.propTypes = {
  card: PropTypes.shape({
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
  }),
  isPlaying: PropTypes.bool,
  onTitleClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default FilmCard;
