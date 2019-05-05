import React from 'react';
import MainScreen from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {movieTitles, genres} = props;

  return <MainScreen
    movieTitles={movieTitles}
    genres={genres}
  />;
};

App.propTypes = {
  movieTitles: PropTypes.arrayOf(PropTypes.string),
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default App;
