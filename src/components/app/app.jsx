import React from 'react';
import MainScreen from '../main/main.jsx';
import PropTypes from 'prop-types';


const App = (props) => {
  const {films, genres} = props;

  return <MainScreen
    films={films}
    genres={genres}
  />;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequred,
    src: PropTypes.string.isRequred,
    title: PropTypes.string.isRequred,
  })),
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default App;
