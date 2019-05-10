import React from 'react';
import PropTypes from 'prop-types';


const FilmCard = (props) => {
  const {card, onMouseEnter, onClick} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnter(card)}>
    <button className="small-movie-card__play-btn" type="button" onClick={() => onClick(card)}>Play</button>
    <div className="small-movie-card__image">
      <img src={card.src} alt={card.title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={card.href} onClick={() => onClick(card)}>{card.title}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  card: PropTypes.shape({
    href: PropTypes.string.isRequred,
    src: PropTypes.string.isRequred,
    title: PropTypes.string.isRequred,
  }),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
};

export default FilmCard;
