import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import App from './app.jsx';
import store from '../../mocks/store.js';


describe(`App`, () => {
  it(`should render`, () => {
    const props = {
      isSignInPage: true,
    }

    const mockStore = configureStore();
    const tree = renderer.create(
      <Provider store={mockStore(store)}>
        <App {...props}/>
      </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
    return undefined;
  });
});
