import React from 'react';
import {shallow} from 'enzyme';
import Main from './main.jsx';


it(`Click by header works correctly`, () => {
  const clickHandler = jest.fn();

  const main = shallow(
      <Main
        movieTitles={[`Any movie title`]}
        genres={[`Any movie genre`]}
        onClick={clickHandler}
      />);

  const headerLink = main.find(`.small-movie-card__link`).first();
  headerLink.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
