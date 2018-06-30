import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencies } from '../../redux/actions/fetchActions';
import { selectCurrency, updateCurrencyValue } from '../../redux/actions/currencyActions';

import { validateCurrencyInput } from '../../helpers';

import Select from '../Select';

import './Form.css';

export class Form extends Component {
    constructor(props) {
        super(props);

        this.handleCurrencyValueChange = this.handleCurrencyValueChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    render() {
        return (
            <form className='Form' onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    maxLength='10'
                    value={this.props.currencyValue}
                    onChange={this.handleCurrencyValueChange}
                    placeholder='How much?'/>
                <Select
                    selectedCurrency={this.props.selectedCurrency}
                    handleSelectChange={this.handleSelectChange}
                    rates={this.props.rates} />
            </form>
        );
    }

    handleCurrencyValueChange(e) {
        this.props.updateCurrencyValue(validateCurrencyInput(e.target.value));
    }

    handleSelectChange(e) {
        this.props.fetchData(e.target.value);
    }
}

function mapStateToProps(store) {
    return {
        rates: store.ratesData.rates,
        selectedCurrency: store.currency.selectedCurrency,
        currencyValue: store.currency.currencyValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (currency) => {
            dispatch(selectCurrency(currency));
            dispatch(fetchCurrencies(currency));
        },
        updateCurrencyValue: (value) => {
            dispatch(updateCurrencyValue(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
