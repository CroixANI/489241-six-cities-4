import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, OperationCreator, ActionType, AuthorizationStatus} from './user';

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: `NO_AUTH`,
      currentUser: null,
      isAuthChecked: false,
    });
  });

  it(`Reducer with require authorization should change authorization status`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      currentUser: null,
      isAuthChecked: false,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      currentUser: null,
      isAuthChecked: true,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      currentUser: null,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      currentUser: null,
      isAuthChecked: true,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      currentUser: null,
      isAuthChecked: false,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      currentUser: null,
      isAuthChecked: true,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      currentUser: null,
      isAuthChecked: false,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      currentUser: null,
      isAuthChecked: true,
    });
  });

  it(`Reducer for setting currently logged in user should work correctly`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      currentUser: null,
      isAuthChecked: false,
    }, {
      type: ActionType.SET_CURRENT_USER,
      payload: {
        id: 1,
        name: `John Doe`,
        imageUrl: `img/1.png`,
        isPro: false},
    }))
    .toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      currentUser: {
        id: 1,
        name: `John Doe`,
        imageUrl: `img/1.png`,
        isPro: false},
      isAuthChecked: false,
    });
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Action creator for required authorization should create correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `NO_AUTH`
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  it(`Action creator for setting current logged in user should create correct action`, () => {
    expect(ActionCreator.setCurrentUser({
      id: 1,
      name: `John Doe`,
      imageUrl: `img/1.png`,
      isPro: false}))
    .toEqual({
      type: ActionType.SET_CURRENT_USER,
      payload: {
        id: 1,
        name: `John Doe`,
        imageUrl: `img/1.png`,
        isPro: false},
    });
  });
});

describe(`User operations work correctly`, () => {
  it(`Should make correct API call to GET /login and with success response change AuthorizationStatus`, () => {
    const checkAuth = OperationCreator.checkAuth();
    const dispatch = jest.fn();
    const onUnauthorized = jest.fn();
    const api = createAPI(onUnauthorized);
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    checkAuth(dispatch, () => {}, api)
      .then(() => {
        // 1 - ActionCreator.requireAuthorization
        // 2 - ActionCreator.setCurrentUser
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(onUnauthorized).toHaveBeenCalledTimes(0);
      })
      .catch(() => {});
  });

  it(`Should make correct API call to GET /login and with unauthorized error change AuthorizationStatus`, () => {
    const checkAuth = OperationCreator.checkAuth();
    const dispatch = jest.fn();
    const onUnauthorized = jest.fn();
    const api = createAPI(onUnauthorized);
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/login`)
      .reply(403, {fake: true});

    checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
        expect(onUnauthorized).toHaveBeenCalledTimes(1);
      })
      .catch(() => {});
  });

  it(`Should make correct API call to POST /login and with success response change AuthorizationStatus`, () => {
    const login = OperationCreator.login({});
    const dispatch = jest.fn();
    const onUnauthorized = jest.fn();
    const api = createAPI(onUnauthorized);
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    login(dispatch, () => {}, api)
      .then(() => {
        // 1 - ActionCreator.requireAuthorization
        // 2 - ActionCreator.setCurrentUser
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(onUnauthorized).toHaveBeenCalledTimes(0);
      })
      .catch(() => {});
  });

  it(`Should make correct API call to POST /login and with unauthorized error should not change AuthorizationStatus`, () => {
    const login = OperationCreator.login({});
    const dispatch = jest.fn();
    const onUnauthorized = jest.fn();
    const api = createAPI(onUnauthorized);
    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/login`)
      .reply(400, {fake: true});

    login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
        expect(onUnauthorized).toHaveBeenCalledTimes(1);
      })
      .catch(() => {});
  });
});
