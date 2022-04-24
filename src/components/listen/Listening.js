import React from 'react'
import { Layout, Typography } from 'antd';

const { Content } = Layout;

function ListenContent() {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50, minHeight: '85h' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '78vh', borderRadius: 10 }}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', fontSize: 24 }}
                >
                    Listening page
                </Typography.Paragraph>
            </div>
        </Content>
    )
}

export default ListenContent