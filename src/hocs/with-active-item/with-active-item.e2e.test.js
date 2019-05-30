import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withActiveItem} from './with-active-item';


Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`WithActiveItem`, () => {
  it(`set correctly item to state`, () => {
    const props = {
      activeItem: `item`,
      changeFilter: jest.fn(),
    };
    const wrappedComponent = shallow(<MockComponentWrapped {...props}/>);

    expect(wrappedComponent.state().activeItem).toEqual(`item`);
  });
});
