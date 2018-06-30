const initialState = {
    selectedCurrency: 'EUR',
    currencyValue: 1
};

export function currency(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CURRENCY':
            return Object.assign({}, state, { selectedCurrency: action.currency });
        case 'UPDATE_CURRENCY_VALUE':
            return Object.assign({}, state, { currencyValue: action.value });
        default:
            return state;
    }
};
