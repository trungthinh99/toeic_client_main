import React from 'react'
import { Layout, Typography, Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux'
import { gameScoreSelector } from '../../redux/selectors';
import { Link } from "react-router-dom";

const { Content } = Layout;

function Score() {
    const gameScore = useSelector(gameScoreSelector)

    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50, minHeight: '85vh' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '78vh', borderRadius: 10,  }}>
                <Row justify="center" align="middle" style={{ height: 450 , flexDirection: 'column', display: 'flex' }}>
                    <Col>
                        <Typography.Paragraph
                            style={{ fontWeight: 'bold', fontSize: 38 }}
                        >
                            Your Score: {gameScore}
                        </Typography.Paragraph>
                    </Col>
                    <Col>
                        <Link to="/home">
                            <Button
                                type="primary"
                                style={{ fontSize: 15, height: 42, borderRadius: 5 }}
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}

export default Score