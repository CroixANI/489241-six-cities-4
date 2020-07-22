import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, OperationCreator, ActionType, AuthorizationStatus} from './user';

const onUnauthorized = jest.fn();
const api = createAPI(onUnauthorized);

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: `NO_AUTH`
    });
  });

  it(`Reducer with require authorization should change authorization status`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
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
});

describe(`Operations work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  it(`Should make correct API call to /login and with success response change AuthorizationStatus`, () => {
    const checkAuth = OperationCreator.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(onUnauthorized).toHaveBeenCalledTimes(0);
      });
  });

  it(`Should make correct API call to /login and with unauthorized error change AuthorizationStatus`, () => {
    const checkAuth = OperationCreator.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(403, {fake: true});

    checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
        expect(onUnauthorized).toHaveBeenCalledTimes(1);
      });
  });
});
