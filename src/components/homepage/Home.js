import React from 'react'
import { Layout, Typography, Row, Col } from 'antd';

const { Content } = Layout;

function Home() {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 104, height: 610 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 560, borderRadius: 10 }}>
                <Row justify="center"> 
                    <Col>
                        <Typography.Paragraph
                            style={{ fontWeight: 'bold', fontSize: 24 }}
                        >
                            Home
                        </Typography.Paragraph>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}

export default Home