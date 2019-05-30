import React from 'react';
import renderer from 'react-test-renderer';

import {withActiveItem} from './with-active-item';


const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`WithActiveItem`, () => {
  it(`should render`, () => {
    const props = {
      activeItem: `item`,
      changeFilter: jest.fn(),
    };

    const tree = renderer.create(<MockComponentWrapped {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
