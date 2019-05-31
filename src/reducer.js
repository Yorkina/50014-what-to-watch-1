const initialState = {
  activeItem: `All Genre`,
  films: [],
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {
        activeItem: payload,
      });

    case `GET_FILTERED_FILMS`:
      return { ...state, ...{
        films: [...payload],
      }};
  }

  return state;
};

const actionCreator = {
  changeGenre: (genre) => ({
    type: `CHANGE_GENRE`,
    payload: genre,
  }),

  getFilteredFilms: (films) => ({
    type: `GET_FILTERED_FILMS`,
    payload: films,
  }),
};

export {reducer, actionCreator};
