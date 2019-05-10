import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from './film-list.jsx';


describe(`FilmList`, () => {
  it(`should render`, () => {
    const tree = renderer
      .create(<FilmList
        films={[{
          href: `fantastic-beasts-the-crimes-of-grindelwald.html`,
          src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          title: `Fantastic Beasts: The Crimes of Grindelwald`,
        }]}
      />).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
