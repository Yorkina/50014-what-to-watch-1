import React from 'react'
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignIn} from './sign-in.jsx';


Enzyme.configure({adapter: new Adapter()});

describe(`SignIn events works correctly`, () => {
  it(`change event work correctly on email input`, () => {
    const login = jest.fn();
    const hideSignInPage = jest.fn();

    const props = {
      login,
      hideSignInPage,
    };

    const signIn = mount(<SignIn {...props} />);
    const input = signIn.find(`input[name="email"]`);

    input.simulate(`change`, {target: {
        name: `email`,
        value: `email@mail.com`,
      }
    });

    signIn.update();

    expect(signIn.state()).toEqual({email: `email@mail.com`, password: ``});
  });

  it(`change event work correctly on password input`, () => {
    const login = jest.fn();
    const hideSignInPage = jest.fn();

    const props = {
      login,
      hideSignInPage,
    };

    const signIn = mount(<SignIn {...props} />);
    const input = signIn.find(`input[name="password"]`);

    input.simulate(`change`, {target: {
        name: `password`,
        value: `password`,
      }
    });

    signIn.update();

    expect(signIn.state()).toEqual({email: ``, password: `password`});
  });

  it(`submit event work correctly on form`, () => {
    const login = jest.fn();
    const hideSignInPage = jest.fn();
    const eventPreventDefault = jest.fn();

    const props = {
      login,
      hideSignInPage,
    };
    const signIn = mount(<SignIn {...props} />);
    const form = signIn.find(`form`);

    signIn.setState({
      email: `email@mail.com`,
      password: `password`,
    });

    form.simulate(`submit`, {
      preventDefault: eventPreventDefault,
    });

    expect(eventPreventDefault).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith(`email@mail.com`, `password`);
    expect(hideSignInPage).toHaveBeenCalledTimes(1);
  });
});

