import * as currencyActions from './currencyActions';

describe('Actions', () => {
    it('should create an action to select currency', () => {
        const currency = 'PLN';
        const expectedAction = {
            type: 'SELECT_CURRENCY',
            currency
        };

        expect(currencyActions.selectCurrency(currency)).toEqual(expectedAction);
    });

    it('should create an action to update currency value', () => {
        const value = 2;
        const expectedAction = {
            type: 'UPDATE_CURRENCY_VALUE',
            value
        };

        expect(currencyActions.updateCurrencyValue(value)).toEqual(expectedAction);
    });
});
