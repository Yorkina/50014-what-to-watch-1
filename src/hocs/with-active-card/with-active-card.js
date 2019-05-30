import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const DELAY_TIME = 1000;

export const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
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
      const {isPlaying} = this.state;
      const {card} = this.props;

      return <Component
        card={card}
        isPlaying={isPlaying}
        onTitleClick={this._handleTitleClick}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      />;
    }
  }

  WithActiveCard.propTypes = {
    card: PropTypes.shape({
      href: PropTypes.string.isRequred,
      preview: PropTypes.string.isRequred,
      src: PropTypes.string.isRequred,
      title: PropTypes.string.isRequred,
    })
  };

  return WithActiveCard;
}

export default withActiveCard;
