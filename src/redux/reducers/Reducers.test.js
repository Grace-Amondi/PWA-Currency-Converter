import * as currencyReducer from '../../redux/reducers/currencyReducer';
import * as fetchReducer from '../../redux/reducers/fetchReducer';

describe('Reducers', () => {
    it('should return the initial state', () => {
        expect(currencyReducer.currency(undefined, {})).toEqual({
            selectedCurrency: 'EUR',
            currencyValue: 1
        });
    });

    it('should handle SELECT_CURRENCY', () => {
        expect(currencyReducer.currency([], {
            type: 'SELECT_CURRENCY',
            currency: 'AUD'
        })).toEqual({
            selectedCurrency: 'AUD'
        });
    });

    it('should return the initial state of', () => {
        expect(fetchReducer.ratesData(undefined, {})).toEqual({});
    });

    it('should handle FETCH_SUCCESS', () => {
        expect(fetchReducer.ratesData([], {
            type: 'FETCH_SUCCESS',
            payload: { base: 'EUR', date: '2017-04-28', rates: {} }
        })).toEqual({
            error: undefined,
            base: 'EUR',
            date: '2017-04-28',
            rates: {}
        });
    });
});
