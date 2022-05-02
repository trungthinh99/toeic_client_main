import React from 'react'
import { Layout, Typography, Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { gameScoreSelector } from '../../redux/modules/game/selector';
import "../../App.css"
import "./index.css"

const { Content } = Layout;

function Score() {
    const gameScore = useSelector(gameScoreSelector)
    return (
        <Content className="content-css">
            <div className="content-background-css">
                <Row className="row-css">
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