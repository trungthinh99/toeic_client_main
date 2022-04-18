import React, { useState } from 'react'
import { Layout, Table, Col, Row, Input, Button } from 'antd';
import { vocabData } from './Data'
import { useDispatch, useSelector } from 'react-redux'
import { vocabListSelector } from '../../redux/selectors';

const { Content } = Layout;

function VocabContent() {
  // const vocab = useSelector(vocabListSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  // const [type, setType] = useState('');
  // const [mean, setMean] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
  }

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
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={vocabData} />
          </Col>
          <Row>
            <Col>
              <Input value={name} onChange={handleChange} style={{ width: 120 }} />
            </Col>
            <Col>
              <Input style={{ width: 120, marginLeft: 60 }} />
            </Col>
            <Col>
              <Input style={{ width: 120, marginLeft: 60 }} />
            </Col>
            <Col>
              <Button type="primary" style={{ marginLeft: 60 }}>Add</Button>
            </Col>
          </Row>
        </Row>
      </div>
    </Content>
  )
}

export default VocabContent