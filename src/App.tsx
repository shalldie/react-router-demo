import React from 'react';
import AppStyle from './App.module.scss';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SideBar from './components/SideBar';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App: React.FC = () => (
    <Layout style={{ height: '100vh' }}>
        <SideBar />
        <Layout>
            <Content style={{ margin: 20 }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
            </Content>
        </Layout>
    </Layout >
);

export default App;
