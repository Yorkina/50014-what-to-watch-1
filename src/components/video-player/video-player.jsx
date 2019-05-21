import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


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
    const isMuted = true;
    const isLoop = true;

    return (
      <video
        ref={this._videoRef}
        src={src}
        poster={preview}
        loop={isLoop}
        muted={isMuted}
        width={280}
        height={175}
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
