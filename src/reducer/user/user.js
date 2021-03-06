import {createUser} from '../../data/user';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentUser: null,
  isAuthChecked: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_CURRENT_USER: `SET_CURRENT_USER`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setCurrentUser: (currentUser) => {
    return {
      type: ActionType.SET_CURRENT_USER,
      payload: currentUser,
    };
  },
};

const OperationCreator = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setCurrentUser(createUser(response.data)));
      })
      .catch((err) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    }).then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setCurrentUser(createUser(response.data)));
    })
    .catch((err) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      throw err;
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
        isAuthChecked: true
      });
    case ActionType.SET_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, OperationCreator, AuthorizationStatus};
