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
        src={card.src}
        preview={card.preview}
        isPlaying={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" onClick={onTitleClick} href={card.href}>{card.title}</a>
    </h3>
  </article>;
};


FilmCard.propTypes = {
  card: PropTypes.shape({
    href: PropTypes.string.isRequred,
    preview: PropTypes.string.isRequred,
    src: PropTypes.string.isRequred,
    title: PropTypes.string.isRequred,
  }),
  isPlaying: PropTypes.bool,
  onTitleClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default FilmCard;
