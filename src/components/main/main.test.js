import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';


it(`Main rendered correctly`, () => {
  const tree = renderer
    .create(<Main
      movieTitles={[`Any movie title`]}
      genres={[`Any movie genre`]}
    />).toJSON();

  expect(tree).toMatchSnapshot();

});

