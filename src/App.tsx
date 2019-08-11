import React from 'react';
import AppStyle from './App.module.scss';

const App: React.FC = () => {
    return (
        <div className={AppStyle['app']}>
            <h2 className="title">this is title</h2>
        </div>
    );
}

export default App;
