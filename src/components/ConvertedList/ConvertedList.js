import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencies } from '../../redux/actions/fetchActions';

import ConvertedRow from '../ConvertedRow';

import './ConvertedList.css';

export class ConvertedList extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.selectedCurrency);
    }

    render() {
        let rows;

        if (this.props.rates !== undefined) {
            rows = this.props.rates;
            const currencyValue = this.props.currencyValue;

            rows = rows.map((row, index) => {
                const correctRate = (row.rate * (currencyValue !== '' ? currencyValue : 1)).toFixed(3);
                const change = (row.rate - row.yesterdayRate).toFixed(3);
                const correctChange = change > 0 ? `+${change}` : change;

                return (
                    <ConvertedRow
                        rate={correctRate}
                        currency={row.currency}
                        key={row.currency}
                        change={correctChange} />
                );
            });
        } else {
            rows = <ConvertedRow />
        }

        return (
            <div className='converted-list'>
                {this.props.error !== undefined && <ConvertedRow hasError={true} rate={this.props.error} />}
                {rows}
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        ...store.ratesData,
        selectedCurrency: store.currency.selectedCurrency,
        currencyValue: store.currency.currencyValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (baseCurrency) => {
            dispatch(fetchCurrencies(baseCurrency));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConvertedList);
