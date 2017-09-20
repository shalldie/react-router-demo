import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import CoreLayout from '../layout/CoreLayout';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound';



const BasicRoutes = () => (
    <Router>
        <CoreLayout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </CoreLayout>
    </Router>
);

export default BasicRoutes;