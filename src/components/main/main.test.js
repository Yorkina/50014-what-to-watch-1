import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Main from './main.jsx';
import store from '../../mocks/store.js';


describe(`Main`, () => {
  it(`should render if isAuthorizationRequired true`, () => {
    const props = {
      isAuthorizationRequired: true,
      userAvatarSrc: `img/avatar.jpg`,
      showSignInPage: jest.fn(),
    }

    const mockStore = configureStore();
    const tree = renderer.create(
      <Provider store={mockStore(store)}>
        <Main {...props}/>
      </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render if isAuthorizationRequired false`, () => {
    const props = {
      isAuthorizationRequired: false,
      userAvatarSrc: `img/avatar.jpg`,
      showSignInPage: jest.fn(),
    }

    const mockStore = configureStore();
    const tree = renderer.create(
      <Provider store={mockStore(store)}>
        <Main {...props}/>
      </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
