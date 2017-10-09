// eslint-disable-next-line
import React, { Component } from "react";
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export default class RouterHook extends Component {
    constructor(props) {
        super(props);

        this.props.history.listen((location, action) => {
            nprogress.start();
            nprogress.done();
        });
    }

    render(){
        return (
            this.props.children
        );
    }
}