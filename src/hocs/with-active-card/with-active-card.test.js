import React from 'react';
import renderer from 'react-test-renderer';

import {withActiveCard} from './with-active-card';


const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

describe(`WithActiveCard`, () => {
  it(`should render`, () => {
    const props = {
      card: {
        href: `fantastic-beasts-the-crimes-of-grindelwald.html`,
        previewImageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
      }
    };

    const tree = renderer.create(<MockComponentWrapped {...props}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
