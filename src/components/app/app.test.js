import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import App from './app.jsx';
import films from '../../mocks/films.js';


describe(`App`, () => {
  it(`should render`, () => {

    const initialMockState = {
      activeItem: `All Genre`,
      films: films,
    };

    const mockStore = configureStore();

    const tree = renderer.create(
      <Provider store={mockStore(initialMockState)}>
        <App />
      </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
