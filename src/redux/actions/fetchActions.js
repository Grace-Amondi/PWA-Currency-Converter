import { getYesterdayDate, transformData } from '../../helpers';

const api_key = "ea5e5c410efb7e3dbb061854239b9e2e"
export const fetchCurrenciesRequest = () => {
    return {
        type: 'FETCH_REQUEST'
    };
}

export const fetchCurrenciesSuccess = (payload) => {
    return {
        type: 'FETCH_SUCCESS',
        payload
    };
};

export const fetchCurrenciesError = (error) => {
    return {
        type: 'FETCH_ERROR',
        error
    };
};

export const fetchCurrencies = (baseCurrency) => {
    return (dispatch) => {
        dispatch(fetchCurrenciesRequest());

        return fetchRatesData(baseCurrency)
            .then((todayData) => {
                fetchYesterdayRatesData(baseCurrency, getYesterdayDate(todayData.date))
                    .then((yesterdayData) => ({ todayData, yesterdayData }))
                    .then((fullData) => dispatch(fetchCurrenciesSuccess(transformData(fullData))))
                    .catch((error) => dispatch(fetchCurrenciesError(error)));
            })
            .catch((error) => dispatch(fetchCurrenciesError(error)));
    };
};

function fetchRatesData(baseCurrency) {
    const URL = `https://api.fixer.io/latest?access_key=${api_key}&base=${baseCurrency}`;

    return fetchData(URL);
}

function fetchYesterdayRatesData(baseCurrency, yesterdayDate) {
    const URL = `https://api.fixer.io/${yesterdayDate}?access_key=${api_key}&base=${baseCurrency}`;

    return fetchData(URL);
}

function fetchData(URL) {
    return fetch(URL, {method: 'GET'})
        .then(response => response)
        .then(response => response.json());
}
