import React from 'react'
import { Layout, Typography } from 'antd';
import "../../App.css"

const { Content } = Layout;

function ListenContent() {
    return (
        <Content className="content-css">
            <div className="content-background-css">
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