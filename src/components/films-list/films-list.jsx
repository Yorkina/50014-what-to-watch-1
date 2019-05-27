import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FilmCard from '../film-card/film-card.jsx';


export class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
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

const filterFilms = (state) => {
  const {films, currentFilter} = state;

  if (currentFilter === `All Genre`) {
    return films;
  }

  return films.filter(({genre}) => genre === currentFilter);
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
  })),
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};
