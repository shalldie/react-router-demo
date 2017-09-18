import React, { Component } from 'react';
import Home from '../pages/Home';
import './index.css';

export default class AppContainer extends Component {
    render() {
        return (
            <div id="baseApp">
                <Home />
            </div>
        );
    }
}