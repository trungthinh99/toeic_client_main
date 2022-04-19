import React from 'react'
import { Layout, Typography, Row } from 'antd';

const { Content } = Layout;

function ReadTab() {
    return (
        <Row justify="center" align="middle" style={{ height: 450 }}>
        <Typography.Paragraph
            style={{ fontWeight: 'bold', fontSize: 24 }}
        >
            Reading Content
        </Typography.Paragraph>
    </Row>
    )
}

export default ReadTab