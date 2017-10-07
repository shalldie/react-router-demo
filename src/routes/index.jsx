import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';

import CoreLayout from '../layout/CoreLayout';
import NavigatorView from './NavigatorView';
import Home from './Home';
import TodoList from './TodoList';
import PageNotFound from './PageNotFound';
import nprogress from 'nprogress';

import 'nprogress/nprogress.css';


/**
 * 路由钩子
 * 
 * @class RouterHook
 * @extends {Component}
 */
class RouterHook extends Component {

    constructor(props) {
        super(props);

        this.props.history.listen((location, action) => {
            nprogress.start();
            nprogress.done();
        });
    }

    render() {
        return (
            this.props.children
        );
    }
}

let RouterHookView = withRouter(RouterHook);

const BasicRoutes = () => (
    <Router>
        {/* 给路由加一层hook */}
        <RouterHookView>
            {/* 页面外部容器 */}
            <CoreLayout>
                <Switch>
                    <Route path="/" exact component={NavigatorView} />
                    <Route path="/home" component={Home} />
                    <Route path="/todolist" component={TodoList} />
                    <Route component={PageNotFound} />
                </Switch>
            </CoreLayout>
        </RouterHookView>
    </Router>
);

export default BasicRoutes;