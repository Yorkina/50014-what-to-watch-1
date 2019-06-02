import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Main from './main.jsx';
import filmsMock from '../../mocks/films.js';


describe(`Main`, () => {
  it(`should render`, () => {
    const mockStore = configureStore();

    const tree = renderer.create(
      <Provider store={mockStore(filmsMock)}>
        <Main />
      </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
