import React from 'react';
import renderer from 'react-test-renderer';
import {FiltersList} from './filters-list.jsx';


describe(`FiltersList`, () => {
  it(`should render`, () => {
    const props = {
      properties: [`Comedy`, `Drama`, `Crime`],
      activeItem: `Comedy`,
      changeFilter: jest.fn(),
    };

    const tree = renderer.create(<FiltersList {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
