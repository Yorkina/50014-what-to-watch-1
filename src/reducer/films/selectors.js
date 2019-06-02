import {createSelector} from 'reselect';

import {NameSpace} from '../name-space';
import {getCurrentFilter} from '../filters/selectors';

const NAMESPACE = NameSpace.FILMS;

export const getFilmsGenres = (state) => {
  return state[NAMESPACE].films.reduce(
    (accum, film) => {
      if (accum.indexOf(film.genre) === -1) {
        accum.push(film.genre);
      }

      return accum;
    }, []);
};

export const getFilms = (state) => state[NAMESPACE].films;

export const getFilteredFilms = createSelector(
    getFilms,
    getCurrentFilter,
    (films, selectedGenre) => {
      if (selectedGenre === `All Genre`) {
        return films;
      }

      return films.filter(({genre}) => genre === selectedGenre);
    }
);
