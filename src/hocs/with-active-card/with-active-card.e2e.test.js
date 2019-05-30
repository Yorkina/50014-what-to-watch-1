import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from '../../components/film-card/film-card.jsx';

import {withActiveCard} from './with-active-card';


Enzyme.configure({adapter: new Adapter()});

describe(`WithActiveCard`, () => {
  it(`mouse enter should start playing`, () => {
    const DELAY_TIME = 1000;
    const MockComponentWrapped = withActiveCard(FilmCard);
    const onMouseEnter = jest.fn();
    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    const card = mount(
      <MockComponentWrapped
        card={mock}
        isPlaying={false}
        onTitleClick={jest.fn()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={jest.fn()}
      />
    );

    card.simulate(`mouseEnter`);

    const timerId = setTimeout(() => {
      expect(card.state().isPlaying).toEqual(true);
      clearTimeout(timerId);
    }, DELAY_TIME);
  });

  it(`mouse leave should stop playing`, () => {
    const MockComponentWrapped = withActiveCard(FilmCard);
    const onMouseLeave = jest.fn();
    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    const card = mount(
      <MockComponentWrapped
        card={mock}
        isPlaying={true}
        onTitleClick={jest.fn()}
        onMouseEnter={jest.fn()}
        onMouseLeave={onMouseLeave}
      />
    );

    card.simulate(`mouseLeave`);

    expect(card.state().isPlaying).toEqual(false);
  });
});
