import React from 'react';
import {Layout, theme} from 'antd';
import {RoutedContent} from '../router/router';
import '../styles/layout.less';

const {Header, Content, Footer} = Layout;

const LayoutDemo: React.FunctionComponent = () => {
    const {token: { colorBgContainer }} = theme.useToken();
 
    return (
        <Layout className="layout">
            <Header />
            <Content className="layout__content">
                <div className="layout__content-inner" style={{backgroundColor: colorBgContainer}}>
                    <RoutedContent />
                </div> 
            </Content>
            <Footer />
        </Layout>
    );
};

export default LayoutDemo;