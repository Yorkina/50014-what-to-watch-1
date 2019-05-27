import {
  reducer,
  actionCreator,
} from './reducer';

describe(`Action creator`, () => {
  it(`Return filtered films`, () => {
    expect(actionCreator.getFilteredFilms([
      {
        genre: `Crime`,
        href: `bohemian-rhapsody.html`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        preview: `img/bohemian-rhapsody.jpg`,
        title: `Bohemian Rhapsody`,
      },
      {
        genre: `Dramas`,
        href: `johnny-english.html`,
        src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        preview: `img/johnny-english.jpg`,
        title: `Johnny English`,
      },
    ])).toEqual({
      type: `GET_FILTERED_FILMS`,
      payload: [
        {
          genre: `Crime`,
          href: `bohemian-rhapsody.html`,
          src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          preview: `img/bohemian-rhapsody.jpg`,
          title: `Bohemian Rhapsody`,
        },
        {
          genre: `Dramas`,
          href: `johnny-english.html`,
          src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          preview: `img/johnny-english.jpg`,
          title: `Johnny English`,
        },
      ],
    });
  });

  it(`Change filter correctly`, () => {
    expect(actionCreator.changeGenre(`Comedies`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Comedies`,
    });
  });
});

describe(`Reducer`, () => {
  it(`Return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      currentFilter: `All Genre`,
      films: [],
    });
  });

  it(`Change filter in state`, () => {
    expect(reducer({
      currentFilter: `All Genre`,
      films: [],
    }, {
      type: `CHANGE_GENRE`,
      payload: `Dramas`,
    })).toEqual({
      currentFilter: `Dramas`,
      films: [],
    });
  });

  it(`Change films in state`, () => {
    expect(reducer({
      currentFilter: `All Genre`,
      films: [],
    }, {
      type: `GET_FILTERED_FILMS`,
      payload: [
        {
          genre: `Crime`,
          href: `bohemian-rhapsody.html`,
          src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          preview: `img/bohemian-rhapsody.jpg`,
          title: `Bohemian Rhapsody`,
        },
        {
          genre: `Dramas`,
          href: `johnny-english.html`,
          src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          preview: `img/johnny-english.jpg`,
          title: `Johnny English`,
        },
      ],
    })).toEqual({
      currentFilter: `All Genre`,
      films: [
        {
          genre: `Crime`,
          href: `bohemian-rhapsody.html`,
          src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          preview: `img/bohemian-rhapsody.jpg`,
          title: `Bohemian Rhapsody`,
        },
        {
          genre: `Dramas`,
          href: `johnny-english.html`,
          src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          preview: `img/johnny-english.jpg`,
          title: `Johnny English`,
        },
      ],
    });
  });
});
