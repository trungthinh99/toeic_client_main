import React, { useState } from 'react'
import { Layout, Typography, Input } from 'antd';

const { Content } = Layout;

function ReadContent() {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50, minHeight: '85vh' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '78vh', borderRadius: 10 }}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', fontSize: 24 }}
                >
                    Reading content
                </Typography.Paragraph>
            </div>
        </Content>
    )
}

export default ReadContent