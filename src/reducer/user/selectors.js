import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) =>
  state[NAME_SPACE].authorizationStatus;

export const getIsAuthChecked = (state) =>
  state[NAME_SPACE].isAuthChecked;

export const getCurrentUserEmail = (state) => {
  const currentUser = state[NAME_SPACE].currentUser;
  if (currentUser) {
    return currentUser.email;
  }

  return ``;
};
