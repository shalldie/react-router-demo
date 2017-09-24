import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import CoreLayout from '../layout/CoreLayout';
import NavigatorView from './NavigatorView';
import Home from './Home';
import TodoList from './TodoList';
import PageNotFound from './PageNotFound';



const BasicRoutes = () => (
    <Router>
        <CoreLayout>
            <Switch>
                <Route path="/" exact component={NavigatorView} />
                <Route path="/home" component={Home} />
                <Route path="/todolist" component={TodoList} />
                <Route component={PageNotFound} />
            </Switch>
        </CoreLayout>
    </Router>
);

export default BasicRoutes;