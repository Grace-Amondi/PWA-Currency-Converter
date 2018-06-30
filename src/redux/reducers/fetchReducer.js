export function ratesData(state = {}, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return state;
        case 'FETCH_SUCCESS':
            state.error = undefined;
            return Object.assign({}, state, { ...action.payload });
        case 'FETCH_ERROR':
            return Object.assign({}, state, { error: action.error.message });
        default:
            return state;
    }
};
