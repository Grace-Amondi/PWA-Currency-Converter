import React from 'react';

import './ConvertedRow.css';

function ConvertedRow(props) {
    const { rate, currency, change, hasError } = props;

    return (
        <div className={`converted-row ${hasError ? 'error-row' : ''}`}>
            <div><b>{rate} {currency}</b></div>
            <div><small>{change}</small></div>
        </div>
    );
}

ConvertedRow.defaultProps = {
    rate: 'Loading',
    currency: '...'
};

export default ConvertedRow;
