import React from 'react'
import { Layout, Table } from 'antd';
import { vocabData } from './Data'
 
const { Content } = Layout;



function VocabContent() {
    const columns = [
        {
          title: 'Từ vựng',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Loại từ',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Nghĩa',
          dataIndex: 'mean',
          key: 'mean',
        }
    ]
    
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 104, height: 610 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 560, borderRadius: 10 }}>
                <Table columns={columns} dataSource={vocabData} />
            </div>
        </Content>
    )
}

export default VocabContent