import React from 'react';
import ReactDOM from 'react-dom';

import ConvertedRow from './ConvertedRow';

describe('ConvertedRow Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConvertedRow />, div);
    });
});
