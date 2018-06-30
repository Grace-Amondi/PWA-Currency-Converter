export const selectCurrency = (currency) => {
    return {
        type: 'SELECT_CURRENCY',
        currency
    };
};

export const updateCurrencyValue = (value) => {
    return {
        type: 'UPDATE_CURRENCY_VALUE',
        value
    };
};
