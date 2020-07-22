import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.APP;

export const getAuthorizationStatus = (state) =>
  state[NAME_SPACE].authorizationStatus;
