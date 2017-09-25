import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import CoreLayout from '../layout/CoreLayout';
import NavigatorView from './NavigatorView';
import Home from './Home';
import TodoList from './TodoList';
import PageNotFound from './PageNotFound';

const routerHook = () => {
    console.log('hello world');
};

const BasicRoutes = () => (
    <Router>
        <Route path="/" onEnter={routerHook}>
            <CoreLayout>
                <Switch>
                    <Route path="/" exact component={NavigatorView} onEnter={routerHook} />
                    <Route path="/home" component={Home} />
                    <Route path="/todolist" component={TodoList} />
                    <Route component={PageNotFound} />
                </Switch>
            </CoreLayout>
        </Route>
    </Router>
);

export default BasicRoutes;