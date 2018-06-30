import React from 'react';

import Option from '../Option';

function Select(props) {
    const { selectedCurrency, handleSelectChange, rates } = props;
    let options = rates;

    if (options !== undefined) {
        options = options.map((rate, index) => {
            return <Option currency={rate.currency} key={rate.currency}/>;
        });
    }

    return (
        <select value={selectedCurrency} onChange={handleSelectChange}>
            <Option currency={selectedCurrency} key={selectedCurrency}/>>
            {options}
        </select>
    );
}

export default Select;
