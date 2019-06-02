const initialState = {
  activeItem: `All Genre`,
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};

export const reducer = (appState = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, appState, {
        activeItem: payload,
      });
  }

  return appState;
};
