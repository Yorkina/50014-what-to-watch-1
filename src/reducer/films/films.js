const initialState = {
  films: [],
};

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};

export const Operation = {
  loadFilms: () => (dispatch, _getState, api) =>
    api.get(`/films`)
      .then((response) => dispatch(
        ActionCreator.loadFilms(parseData(response.data))
      )),
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: [...payload],
      });
  }

  return state;
};

const parseData = (films) => films.map((film) => {
  const {
    description,
    director,
    genre,
    id,
    name,
    rating,
    released,
    starring
  } = film;

  return {
    backgroundColor: film[`background_color`],
    backgroundImageSrc: film[`background_image`],
    description,
    director,
    genre,
    id,
    isFavorite: film[`is_favorite`],
    name,
    posterImageSrc: film[`poster_image`],
    previewImageSrc: film[`preview_image`],
    previewVideoSrc: film[`preview_video_link`],
    rating,
    releasedYear: released,
    runTime: film[`run_time`],
    scores: film[`scores_count`],
    starring,
    videoSrc: film[`video_link`],
  };
});
