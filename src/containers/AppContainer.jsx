import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import './index.css';

export default class AppContainer extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Home}>

                </Route>
            </Router>
        );
    }
}