import React from 'react';
import ReactDOM from 'react-dom';

import { ConvertedList } from './ConvertedList';

describe('ConvertedList Component', () => {
    it('renders without crashing', () => {
        function fetchData(arg) {}
        const arg = '';

        const div = document.createElement('div');
        ReactDOM.render(<ConvertedList fetchData={fetchData}  />, div);
    });
});
