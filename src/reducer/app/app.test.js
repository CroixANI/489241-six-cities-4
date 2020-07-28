import {reducer, ActionCreator, ActionType} from './app';

describe(`Reducer should work correctly`, () => {
  it(`Reducer with no incoming parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: ``,
      currentOfferId: null,
      sortType: `Popular`,
      errorMessage: null,
    });
  });

  it(`Reducer with Change City action should change city`, () => {
    expect(reducer({
      city: ``,
      currentOfferId: null,
      sortType: `Popular`,
      errorMessage: null}, ActionCreator.changeCity(`Amsterdam`)))
    .toEqual({
      city: `Amsterdam`,
      currentOfferId: null,
      sortType: `Popular`,
      errorMessage: null});
  });

  it(`Reducer with Change Current Offer action should change current offer id`, () => {
    expect(reducer({
      city: ``,
      currentOfferId: null,
      sortType: `Popular`,
      errorMessage: null}, ActionCreator.changeCurrentOffer(1)))
    .toEqual({
      city: ``,
      currentOfferId: 1,
      sortType: `Popular`,
      errorMessage: null});
  });

  it(`Reducer with set error message should change current error message`, () => {
    expect(reducer({
      city: ``,
      currentOfferId: null,
      sortType: `Popular`,
      errorMessage: null}, ActionCreator.setErrorMessage(`My message`)))
    .toEqual({
      city: ``,
      currentOfferId: null,
      sortType: `Popular`,
      errorMessage: `My message`});
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Action creator for change city should create correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for change sort type should create correct action`, () => {
    expect(ActionCreator.changeSortType(`Popular`)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `Popular`
    });
  });

  it(`Action creator for change current offer should create correct action`, () => {
    expect(ActionCreator.changeCurrentOffer(42)).toEqual({
      type: ActionType.CHANGE_CURRENT_OFFER,
      payload: 42
    });
  });

  it(`Action creator for setting error message should create correct action`, () => {
    expect(ActionCreator.setErrorMessage(`My message`)).toEqual({
      type: ActionType.SET_ERROR_MESSAGE,
      payload: `My message`
    });
  });
});
