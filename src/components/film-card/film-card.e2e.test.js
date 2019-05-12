import React from 'react';
import Enzyme, {mount} from 'enzyme';
import FilmCard from './film-card.jsx';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

describe(`All events on card works correctly`, () => {
  it(`Title link should be clicked`, () => {
    const clickHandler = jest.fn();

    const card = mount(
      <FilmCard
        card={{
          href: `macbeth.html`,
          src: `img/macbeth.jpg`,
          title: `Macbeth`,
        }}
        onMouseEnter={jest.fn()}
        onClick={clickHandler}
      />
    );

    const headerLink = card.find(`.small-movie-card__link`);
    headerLink.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });


  it(`Active card should be saved`, () => {
    const clickHandler = jest.fn();
    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    const card = mount(
      <FilmCard
        card={mock}
        onMouseEnter={jest.fn()}
        onClick={clickHandler}
      />
    );

    const button = card.find(`.small-movie-card__play-btn`);
    button.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledWith(mock);
  });
});
