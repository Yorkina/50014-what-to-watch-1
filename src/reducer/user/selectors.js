import {NameSpace} from '../name-space';

const NAMESPACE = NameSpace.USER;

export const checkIsAuthorizationRequired = (state) => {
  return state[NAMESPACE].isAuthorizationRequired;
};

export const checkSignInVisibility = (state) => {
  return state[NAMESPACE].isSignInPage;
};

export const getUserAvatarSrc = (state) => {
  return state[NAMESPACE].avatarSrc;
};
