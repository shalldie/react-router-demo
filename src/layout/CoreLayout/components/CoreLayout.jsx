import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './CoreLayout.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class CoreLayout extends Component {
    state = {
        collapsed: false
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout className="core-layout">
                <Sider collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <Link className="logo" to="/">logo</Link>

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/home">
                                <Icon type="pie-chart" />
                                <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about">
                                <Icon type="desktop" />
                                <span>About</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="switcher" /><span>TodoList</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        react-router demo ©2016 balabalabala
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}