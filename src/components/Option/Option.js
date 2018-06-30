import React from 'react';

function Option(props) {
    const { currency } = props;

    return <option value={currency}>{currency}</option>;
}

export default Option;
