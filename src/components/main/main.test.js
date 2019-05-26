import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Main from './main.jsx';
import films from '../../mocks/films.js';


describe(`Main`, () => {
  it(`should render`, () => {

    const initialMockState = {
      currentFilter: `All Genre`,
      films: films,
    };

    const mockStore = configureStore();

    const tree = renderer.create(
      <Provider store={mockStore(initialMockState)}>
        <Main />
      </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
