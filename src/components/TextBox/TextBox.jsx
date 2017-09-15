import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TextBox.css';

export default class TextBox extends Component {

    static propTypes = {
        lbl: PropTypes.string.isRequired
    }

    state = {
        val: 'defValue'
    }

    handleChange = (ex) => {
        let val = this.refs.input.value;
        this.setState({
            val: val
        });
    }

    render() {
        return (
            <div className="text-box">
                <h4>{this.props.lbl}</h4>
                <div>
                    <input ref="input" defaultValue={this.state.val} type="text" onInput={this.handleChange} />
                </div>
                <p>{this.state.val}</p>
            </div>
        );
    }
}