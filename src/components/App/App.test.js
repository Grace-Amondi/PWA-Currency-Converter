import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../../redux/store/configureStore';
const store = configureStore();

import App from './App';

describe('App Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    });
});
