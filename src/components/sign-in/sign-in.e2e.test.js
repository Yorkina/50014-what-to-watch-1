import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignIn} from './sign-in.jsx';


Enzyme.configure({adapter: new Adapter()});

describe(`SignIn events works correctly`, () => {
  it(`change event work correctly on email input`, () => {
    const login = jest.fn();

    const props = {
      login,
      location: {
        state: {
          from: `/some-url`,
        }
      },
    };

    const signIn = mount(<SignIn {...props} />);
    const input = signIn.find(`input[name="email"]`);

    input.simulate(`change`, {target: {
        name: `email`,
        value: `email@mail.com`,
      }
    });

    signIn.update();

    expect(signIn.state()).toEqual({
      email: `email@mail.com`,
      password: ``,
      shouldRedirectToPrevAddress: false,
    });
  });

  it(`change event work correctly on password input`, () => {
    const login = jest.fn();

    const props = {
      login,
      location: {
        state: {
          from: `/some-url`,
        }
      },
    };

    const signIn = mount(<SignIn {...props} />);
    const input = signIn.find(`input[name="password"]`);

    input.simulate(`change`, {target: {
        name: `password`,
        value: `password`,
      }
    });

    signIn.update();

    expect(signIn.state()).toEqual({
      email: ``,
      password: `password`,
      shouldRedirectToPrevAddress: false,
    });
  });

  it(`submit event work correctly on form`, () => {
    const login = jest.fn().mockReturnValue(Promise.resolve());
    const eventPreventDefault = jest.fn();

    const props = {
      login,
      location: {
        state: {
          from: `/some-url`,
        }
      },
    };

    const signIn = shallow(<SignIn {...props} />);
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
  });
});

