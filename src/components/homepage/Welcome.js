import React from 'react'
import { Layout, Typography, Row, Col } from 'antd';

const { Content } = Layout;

function Welcome() {
    return (
        <Row justify="center" align="middle" style={{ height: 420, flexDirection: 'column', display: 'flex'}}>
            <Col>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', fontSize: 24 }}
                >
                    Chào mừng bạn đến với trang web luyện thi tiếng Anh
                </Typography.Paragraph>
            </Col>
            <Col>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', fontSize: 24 }}
                >
                    Đến với chúng tôi bạn chắc chắn sẽ đạt 700 điểm Toeic. Chắc chắn là như thế
                </Typography.Paragraph>
            </Col>
        </Row>
    )
}

export default Welcome