import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.jsx';


describe(`SignIn`, () => {
  it(`should render`, () => {
    const props = {
      login: jest.fn(),
      hideSignInPage: jest.fn()
    };
    const signIn = renderer.create(<SignIn {...props} />).toJSON();

    expect(signIn).toMatchSnapshot();
  });
});
