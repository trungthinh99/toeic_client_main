import React from 'react'
import { Layout, Typography, Row } from 'antd';

const { Content } = Layout;

function VocabTab() {
    return (
        <Row justify="center" align="middle" style={{ height: 450 }}>
            <Typography.Paragraph
                style={{ fontWeight: 'bold', fontSize: 24 }}
            >
                Vocab Content
            </Typography.Paragraph>
        </Row>
    )
}

export default VocabTab