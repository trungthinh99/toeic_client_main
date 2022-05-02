import React from 'react'
import { Row, Col, Typography, Layout, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../../../App.css'

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Profile() {
  return (
    <Content className='content-css'>
      <div className='content-background-css'>
        <Row>
          <Col span={12}>
            <Row justify='center' align='middle' style={{ flexDirection: 'column', height: 450 }}>
              <Avatar size={140} icon={<UserOutlined />} />
              <Typography.Paragraph
                style={{ fontWeight: 'bold', fontSize: 20, marginTop: 15 }}
              >
                Nguyễn Trung Thịnh
              </Typography.Paragraph>
            </Row>
          </Col>
          <Col span={12} justify='center' style={{ flexDirection: 'column' }}>
            <Row justify='center' style={{ flexDirection: 'column', height: 450 }}>
              <Typography.Paragraph
                style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 25 }}
              >
                Thông tin cá nhân
              </Typography.Paragraph>
              <Typography style={{ display: 'flex' }}>
                <Title style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 15, lineHeight: 1 }}>Tên: </Title>
                <Paragraph style={{ fontSize: 20, lineHeight: 1, padding: '0 10px' }}>Nguyễn Trung Thịnh</Paragraph>
              </Typography>
              <Typography style={{ display: 'flex' }}>
                <Title style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 15, lineHeight: 1 }}>DOB: </Title>
                <Paragraph style={{ fontSize: 20, lineHeight: 1, padding: '0 10px' }}>01/07/1999</Paragraph>
              </Typography>
              <Typography style={{ display: 'flex' }}>
                <Title style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 15, lineHeight: 1 }}>Email: </Title>
                <Paragraph style={{ fontSize: 20, lineHeight: 1, padding: '0 10px' }}>trungthinh.99@gmail.com</Paragraph>
              </Typography>
            </Row>
              <Button type='primary'>Chỉnh sửa</Button>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default Profile