import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';


describe(`VideoPlayer`, () => {
  it(`should render`, () => {
    const tree = renderer
      .create(<VideoPlayer
        src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
        preview={`img/macbeth.jpg`}
        isPlaying={false}
      />).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
