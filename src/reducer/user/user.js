const initialState = {
  isAuthorizationRequired: false
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};

export const Operation = {
  loadFilms: () => (dispatch, _getState, api) =>
    api.get(`/login`)
      .then((response) => dispatch(
        ActionCreator.requireAuthorization(response.data)
      )),
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: payload,
      });
  }

  return state;
};
