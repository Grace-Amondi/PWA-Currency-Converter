import { combineReducers } from 'redux';

import { ratesData } from './fetchReducer';
import { currency } from './currencyReducer';

export default combineReducers({
    ratesData,
    currency
});
