import React, { Component } from 'react';

import Form from '../Form';
import ConvertedList from '../ConvertedList';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Form />

                <ConvertedList />
            </div>
        );
    }
}

export default App;
