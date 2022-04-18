import React, { useState } from 'react'
import { Layout, Typography, Input } from 'antd';

const { Content } = Layout;

function ReadContent() {
    const [state, setState] = useState()
    const handle = (e) => {
        console.log(e.target.value);
    }
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 104, height: 610 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 560, borderRadius: 10 }}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', fontSize: 24 }}
                >
                    <Input value={state} onChange={handle}/>
                </Typography.Paragraph>
            </div>
        </Content>
    )
}

export default ReadContent