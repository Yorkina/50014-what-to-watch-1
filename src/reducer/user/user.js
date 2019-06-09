const initialState = {
  id: null,
  name: null,
  email: null,
  avatarSrc: null,
  isSignInPage: false,
  isAuthorizationRequired: true,
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOGIN: `LOGIN`,
  SHOW_SIGN_IN_PAGE: `SHOW_SIGN_IN_PAGE`,
  HIDE_SIGN_IN_PAGE: `HIDE_SIGN_IN_PAGE`,
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  login: (userData) => {
    return {
      type: ActionType.LOGIN,
      payload: userData,
    };
  },

  showSignInPage: () => {
    return {
      type: ActionType.SHOW_SIGN_IN_PAGE,
    };
  },

  hideSignInPage: () => {
    return {
      type: ActionType.HIDE_SIGN_IN_PAGE,
    };
  },
};

export const Operation = {
  login: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {
      email,
      password,
    }).then((response) => {
      dispatch(ActionCreator.login(response.data));
    });
  },
};

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: payload,
      });

    case ActionType.LOGIN:
      return Object.assign({}, state, {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        avatarSrc: payload[`avatar_url`],
        isAuthorizationRequired: false,
      });

    case ActionType.SHOW_SIGN_IN_PAGE:
      return Object.assign({}, state, {
        isSignInPage: true,
      });

    case ActionType.HIDE_SIGN_IN_PAGE:
      return Object.assign({}, state, {
        isSignInPage: false,
      });
  }

  return state;
};
