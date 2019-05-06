import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const init = () => {
  const movieTitles = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `Midnight Special`,
    `Mindhunter`,
    `Orlando`,
    `Dardjeeling Limited`,
    `War of the Worlds`,
    `Seven Years in Tibet`,
    `Moonrise Kingdom`,
    `Snatch`,
    `No Country for Old Men`,
    `Pulp Fiction`,
    `Shutter Island`,
    `Johnny English`,
    `Revenant`,
    `What We Do in the Shadows`,
    `We need to talk about Kevin`
  ];

  const genres = [
    `All genres`,
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`
  ];

  ReactDOM.render(
      <App
        movieTitles={movieTitles}
        genres={genres}
      />,
      document.getElementById(`root`)
  );
};

init();
