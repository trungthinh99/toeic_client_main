import React, { useState } from 'react'
import { Layout, Table, Col, Row, Input, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { vocabListSelector } from '../../redux/modules/vocab/selector';
import { addVocab, deleteVocab } from '../../redux/modules/vocab/action';
import ModalCrud from '../CRUD vocab';
// import "../../App.css"
import "./index.css"

const { Content } = Layout;

function VocabContent() {
  const vocab = useSelector(vocabListSelector);
  const dispatch = useDispatch();
  
  const columns = [
    {
      title: 'Từ vựng',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
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
      title: 'Thao tác',
      key: 'key',
      render: (index) => (
        <Space>
          <Button>
            Edit
          </Button>
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
  
  // const handleClick = () => {
  //   dispatch(addVocab({
  //     key: vocab[vocab.length - 1].key + 1,
  //     name,
  //     type,
  //     mean,
  //   }))
  //   setName('')
  //   setType('')
  //   setMean('')
  // }
      
    
  return (
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50, minHeight: '85vh' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: '78vh', borderRadius: 10 }}>
          <Row>
            <Col span={24}>
              <Table
                pagination={{ defaultPageSize: 5 }}
                columns={columns}
                dataSource={vocab} 
              />
            </Col>
          </Row>
        <ModalCrud />
        </div>
      </Content>
  )
}

export default VocabContent