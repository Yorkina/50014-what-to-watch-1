import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {FiltersList} from './filters-list.jsx';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

describe(`FiltersList`, () => {
  it(`Click by item work correctly`, () => {
    const onClick = jest.fn();
    const props = {
      properties: [`Comedy`, `Drama`, `Crime`],
      activeItem: `Comedy`,
      changeFilter: onClick,
    };

    const filtersList = mount(<FiltersList {...props}/>);
    const filters = filtersList.find(`.catalog__genres-link`);

    filters.forEach((filter) => filter.simulate(`click`));

    expect(onClick).toHaveBeenCalledTimes(props.properties.length);
  });
});
