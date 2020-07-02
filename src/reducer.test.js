import {reducer, ActionType} from './reducer';

it(`Reducer with empty inputs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: ``,
    offers: []
  });
});

it(`Reducer with Change City action should change city`, () => {
  expect(reducer(void 0, {type: ActionType.CHANGE_CITY, payload: `Amsterdam`})).toEqual({
    city: `Amsterdam`,
    offers: []
  });
});
