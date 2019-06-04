const store = {
  FILTER: {
    activeItem: `All Genre`,
  },
  FILMS: {
    films: [
      {
        genre: `Comedy`,
        href: `fantastic-beasts-the-crimes-of-grindelwald.html`,
        previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
      },
      {
        genre: `Crime`,
        href: `bohemian-rhapsody.html`,
        previewVideoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        preview: `img/bohemian-rhapsody.jpg`,
        name: `Bohemian Rhapsody`,
      },
      {
        genre: `Drama`,
        href: `johnny-english.html`,
        previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        preview: `img/johnny-english.jpg`,
        name: `Johnny English`,
      },
      {
        genre: `Drama`,
        href: `macbeth.html`,
        previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        preview: `img/macbeth.jpg`,
        name: `Macbeth`,
      },
      {
        genre: `Fantasy`,
        href: `mindhunter.html`,
        previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        preview: `img/mindhunter.jpg`,
        name: `Mindhunter`,
      },
    ]
  },
  USER: {
    id: null,
    name: null,
    email: null,
    avatarSrc: null,
    isSignInPage: false,
    isAuthorizationRequired: true,
  }
};

export default store;
