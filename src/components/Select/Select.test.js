import React from 'react';
import ReactDOM from 'react-dom';

import Select from './Select';

describe('Select Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Select />, div);
    });
});
