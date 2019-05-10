import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import films from '../../mocks/films.js';


describe(`Main`, () => {
  it(`should render`, () => {
    const tree = renderer
      .create(<App
        films={films}
        genres={[`Any movie genre`]}
      />).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
