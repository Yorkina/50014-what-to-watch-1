import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const imageSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {src, preview} = this.props;

    return (
      <video
        ref={this._videoRef}
        src={src}
        poster={preview}
        loop
        muted
        width={imageSize.WIDTH}
        height={imageSize.HEIGHT}
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string,
  isPlaying: PropTypes.bool,
};

export default VideoPlayer;
