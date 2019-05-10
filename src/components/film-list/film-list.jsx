import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';


class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {
        href: ``,
        src: ``,
        title: ``,
      },
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleMouseEnter(card) {
    this.setState({
      activeCard: card
    });
  }

  _handleClick(card) {
    return card;
  }

  render() {
    const {films} = this.props;

    const itemsList = films.map((item, i) => {
      return <FilmCard
        card={item}
        onMouseEnter={this._handleMouseEnter}
        onClick={this._handleClick}
        key={i}
      />;
    });

    return <div className="catalog__movies-list">
      {itemsList}
    </div>;
  }
}


FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequred,
    src: PropTypes.string.isRequred,
    title: PropTypes.string.isRequred,
  })),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};

export default FilmList;
