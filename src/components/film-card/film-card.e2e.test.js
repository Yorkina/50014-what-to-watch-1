import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './film-card.jsx';


Enzyme.configure({adapter: new Adapter()});

describe(`All events on card works correctly`, () => {
  it(`Title link should be clicked`, () => {
    const onClick = jest.fn();

    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    const card = mount(
      <FilmCard
        card={mock}
        isPlaying={false}
        onTitleClick={onClick}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
      />
    );

    const headerLink = card.find(`.small-movie-card__link`);
    headerLink.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it(`Card should trigger mouseLeave event correctly`, () => {
    const onMouseLeave = jest.fn();

    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    const card = mount(
      <FilmCard
        card={mock}
        isPlaying={false}
        onTitleClick={jest.fn()}
        onMouseEnter={jest.fn()}
        onMouseLeave={onMouseLeave}
      />
    );

    card.simulate(`mouseLeave`);

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });


  it(`Card should trigger mouseEnter event correctly`, () => {
    const onMouseEnter = jest.fn();

    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    const card = mount(
      <FilmCard
        card={mock}
        isPlaying={false}
        onTitleClick={jest.fn()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={jest.fn()}
      />
    );

    card.simulate(`mouseEnter`);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });
});
