import {reducer, ActionCreator, ActionType, AuthorizationStatus} from './user';

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: `NO_AUTH`
    });
  });

  it(`Reducer with Change Current Offer action should change current offer id`, () => {
    expect(reducer(
        {authorizationStatus: `AUTH`},
        ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .toEqual({authorizationStatus: `NO_AUTH`});
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Action creator for required authorization should create correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `NO_AUTH`
    });
  });
});
