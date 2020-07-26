import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as app} from './app/app';
import {reducer as user} from './user/user';
import {reducer as offerData} from './offer-data/offer-data';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.OFFER_DATA]: offerData,
});
