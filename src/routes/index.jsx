import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';

import CoreLayout from '../views/CoreLayout';
import NavigatorView from './NavigatorView';
import Home from './Home';
import TodoList from './TodoList';
import PageNotFound from './PageNotFound';

import RouterHook from '../components/RouterHook';

const BasicRoutes = () => (
    <Router>
        {/* 给路由加一层hook */}
        <RouterHook>
            {/* 页面外部容器 */}
            <CoreLayout>
                <Switch>
                    <Route path="/" exact component={NavigatorView} />
                    <Route path="/home" component={Home} />
                    <Route path="/todolist" component={TodoList} />
                    <Route component={PageNotFound} />
                </Switch>
            </CoreLayout>
        </RouterHook>
    </Router>
);

export default BasicRoutes;