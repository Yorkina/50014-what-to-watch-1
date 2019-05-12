import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import films from '../../mocks/films.js';


describe(`Main`, () => {
  it(`should render`, () => {
    const tree = renderer
      .create(<Main
        films={films}
        genres={[`Any movie genre`]}
      />).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
