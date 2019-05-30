import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';


const DELAY_TIME = 1000;

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this._timerId = 0;

    this.state = {
      isPlaying: false,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleMouseEnter() {
    this._timerId = setTimeout(() => {
      this.setState({
        isPlaying: true,
      });
    }, DELAY_TIME);
  }

  _handleTitleClick() {
    return;
  }

  _handleMouseLeave() {
    clearTimeout(this._timerId);

    this.setState({
      isPlaying: false,
    });
  }

  componentWillUnmount() {
    clearTimeout(this._timerId);
  }

  render() {
    const {card} = this.props;
    const {isPlaying} = this.state;

    return <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={this._handleMouseEnter}
      onMouseLeave={this._handleMouseLeave}>
      <div className="small-movie-card__image">
        <VideoPlayer
          src={card.src}
          preview={card.preview}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={this._handleTitleClick} href={card.href}>{card.title}</a>
      </h3>
    </article>;
  }
}

FilmCard.propTypes = {
  card: PropTypes.shape({
    href: PropTypes.string.isRequred,
    preview: PropTypes.string.isRequred,
    src: PropTypes.string.isRequred,
    title: PropTypes.string.isRequred,
  })
};

export default FilmCard;
