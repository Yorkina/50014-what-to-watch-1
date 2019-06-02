import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';


describe(`FilmCard`, () => {
  it(`should render`, () => {
    const tree = renderer
      .create(<FilmCard
        card={{
          href: `fantastic-beasts-the-crimes-of-grindelwald.html`,
          previewImageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          name: `Fantastic Beasts: The Crimes of Grindelwald`,
        }}
        onMouseEnter={jest.fn()}
        onClick={jest.fn()}
      />).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
