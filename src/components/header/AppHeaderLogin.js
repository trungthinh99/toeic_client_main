import React from 'react'
import { Link } from "react-router-dom";
import { Layout, Typography, Row, Col } from 'antd';

const { Header } = Layout;

function AppHeaderLogin() {
    return (
        <Header style={{ position: 'relative', zIndex: 1, width: '100%', height: '54px' }}>
            <Row>
                <Col style={{ display: 'flex' }} span={12}>

                    <Typography.Paragraph className='nav-text' style={{ paddingLeft: 0 }}>
                        <Link to="/home" style={{ color: 'white' }}>Home</Link>
                    </Typography.Paragraph>

                </Col>

                <Col span={12} >
                    <Typography.Paragraph className='nav-logout'>
                        <Link to="/" style={{ color: 'white' }}>Đăng ký</Link>
                    </Typography.Paragraph>
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeaderLogin