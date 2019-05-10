import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';


const init = () => {
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
        films={films}
        genres={genres}
      />,
      document.getElementById(`root`)
  );
};

init();
