import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './film-card.jsx';


Enzyme.configure({adapter: new Adapter()});

describe(`All events on card works correctly`, () => {
  it(`Title link should be clicked`, () => {
    const onClick = jest.fn();

    FilmCard.prototype._handleTitleClick = onClick;
    const card = mount(
      <FilmCard
        card={{
          href: `macbeth.html`,
          src: `img/macbeth.jpg`,
          title: `Macbeth`,
        }}
      />
    );

    const headerLink = card.find(`.small-movie-card__link`);
    headerLink.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });


  it(`Card should trigger mouseEnter event correctly`, () => {
    const onMouseEnter = jest.fn();

    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    FilmCard.prototype._handleMouseEnter = onMouseEnter;
    const card = mount(
      <FilmCard
        card={mock}
      />
    );

    card.simulate(`mouseEnter`);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });
});
