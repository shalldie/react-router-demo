import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './NavigatorView.css';

export default class NavigatorView extends Component {

    state = {
        list: [{
            link: '/home',
            icon: 'pie-chart',
            lbl: 'Home'
        }]
    }

    render() {
        const { list } = this.state;

        return (
            <div className="navigator-view">
                {
                    this.state.list.map((item, key) => (
                        <Link to={item.link} className="nav-view-wrap" key={key}>
                            <div className="rotate-wrap">
                                <div className="nav-view-item">
                                    <Icon className="nav-view-item-icon" type={item.icon} />
                                </div>
                                <div className="nav-view-item back-side">
                                    {item.lbl}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        );
    }
}