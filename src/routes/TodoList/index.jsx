import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';

export const TodoList = () => (
    <Switch>
        <Route path="" exact component={About} />
        <Route path="" />
    </Switch>
);

export default TodoList;