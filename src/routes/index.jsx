import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link } from 'react-router-dom';

export default class AppRoutes extends Component {
    static propTypes = {
        App: PropTypes.object.isRequired
    }

    render() {
        return (
            <Route component={this.props.App}>

            </Route>

        );
    }
}