import React from 'react';
// eslint-disable-next-line
import { Switch, Route } from 'react-router-dom';

import About from './About';

export const TodoList = ({ match }) => (
    <Switch>
        <Route path={match.path} exact component={About} />
        <Route path={`${match.path}/demo`} component={() => (
            <div>demo</div>
        )} />
    </Switch>
);

export default TodoList;