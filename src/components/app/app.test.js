import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';


it(`App rendered correctly`, () => {
  const tree = renderer
    .create(<App
      movieTitles={[`Any movie title`]}
      genres={[`Any movie genre`]}
    />).toJSON();

  expect(tree).toMatchSnapshot();

});

