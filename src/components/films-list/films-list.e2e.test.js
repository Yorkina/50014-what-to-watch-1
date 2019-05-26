import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {FilmsList} from './films-list.jsx';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

describe(`FilmsList`, () => {
  it(`Active card should be written to state`, () => {
    const mock = {
      href: `mindhunter.html`,
      src: `img/mindhunter.jpg`,
      title: `Mindhunter`,
    }

    const list = mount(
      <FilmsList
        films={[mock]}
      />
    );

    const card = list.find(`.small-movie-card`).first();
    card.simulate(`mouseEnter`);

    expect(list.state().activeCard.href).toBe('mindhunter.html');
    expect(list.state().activeCard.src).toBe('img/mindhunter.jpg');
    expect(list.state().activeCard.title).toBe('Mindhunter');
  });
});
