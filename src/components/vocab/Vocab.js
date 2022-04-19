import React, { useState } from 'react'
import { Layout, Table, Col, Row, Input, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { vocabListSelector } from '../../redux/selectors';
import { addVocab, deleteVocab } from '../../redux/actions';

const { Content } = Layout;

function VocabContent() {
  const vocabList = useSelector(vocabListSelector);
  const dispatch = useDispatch();
  
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [mean, setMean] = useState();
  
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
    },
    {
      title: 'Xoá',
      key: 'key',
      render: (index) => (
        <Space>
          <Button
            type="primary" danger
            onClick={() => dispatch(deleteVocab({ key: index.key }))}
          >
            Delete
          </Button>
        </Space>
      )
    },
  ]
  
  const handleClick = () => {
    dispatch(addVocab({
      key: vocabList[vocabList.length - 1].key + 1,
      name,
      type,
      mean,
    }))
    setName('')
    setType('')
    setMean('')
  }
      
    
  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 104, height: 610 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 560, borderRadius: 10 }}>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={vocabList} />
          </Col>
          <Row>
            <Col>
              <Input value={name} onChange={e => setName(e.target.value)} style={{ width: 120 }} placeholder="Từ vựng"/>
            </Col>
            <Col>
              <Input value={type} onChange={e => setType(e.target.value)} style={{ width: 120, marginLeft: 60 }} placeholder="Loại từ"/>
            </Col>
            <Col>
              <Input value={mean} onChange={e => setMean(e.target.value)} style={{ width: 120, marginLeft: 60 }} placeholder="Nghĩa"/>
            </Col>
            <Col>
              <Button 
                onClick={handleClick}
                type="primary"
                style={{ marginLeft: 60 }}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Row>
      </div>
    </Content>
  )
}

export default VocabContent