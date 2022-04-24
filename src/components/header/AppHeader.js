import React from 'react'
import { Link } from "react-router-dom";
import { Layout, Typography, Row, Col } from 'antd';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header style={{ position: 'relative', zIndex: 1, width: '100%', height: '54px' }}>
      <Row>
        <Col style={{ display: 'flex' }} span={12}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            <Link to="/home" style={{ color: 'white' }}>Home</Link>
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            <Link to="/vocab" style={{ color: 'white' }}>Vocabulary</Link>
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            <Link to="/listen" style={{ color: 'white' }}>Listen</Link>
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            <Link to="/reading" style={{ color: 'white' }}>Reading</Link>
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, marginRight: 32, color: 'white', lineHeight: '32px' }}
          >
            <Link to="/game" style={{ color: 'white' }}>Game</Link>
          </Typography.Paragraph>
        </Col>
        <Col span={12} >
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10, color: 'white', lineHeight: '32px', float: 'right' }}
          >
            <Link to="/login" style={{ color: 'white' }}>Log out</Link>
          </Typography.Paragraph>
        </Col>
      </Row>
    </Header>
  )
}

export default AppHeader