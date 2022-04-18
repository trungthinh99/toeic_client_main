import React from 'react'
import { Layout, Typography, Row, Col } from 'antd';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '54px' }}>
      <Row>
        <Col style={{ display: 'flex' }} span={12}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            Home
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            Vocabulary
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            Listen
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            Reading
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            Game
          </Typography.Paragraph>
        </Col>
        <Col span={12} >
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, color: 'white', lineHeight: '32px', float: 'right' }}
          >
            Log out
          </Typography.Paragraph>
        </Col>
      </Row>
    </Header>
  )
}

export default AppHeader