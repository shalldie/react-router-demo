import React from 'react';
import { Link } from 'react-router-dom';

export const CoreLayout = ({ children }) => (
    <div className="core-layout">
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/home">Home</Link></li>
        </ul>
        {children}
    </div>
);

export default CoreLayout;