import React from 'react'
import { Link } from "react-router-dom";
import { Layout, Typography, Row, Col, Avatar, Menu, Dropdown, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import "./index.css"

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/#">Chỉnh sửa tài khoản</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Đăng xuất</Menu.Item>
  </Menu>
);

function AppHeader() {
  return (
    <Header style={{ position: 'relative', zIndex: 1, width: '100%', height: '54px' }}>
      <Row>
        <Col style={{ display: 'flex' }} span={12}>
          
          <Typography.Paragraph className='nav-text'>
            <Link to="/home" style={{ color: 'white' }}>Home</Link>
          </Typography.Paragraph>

          <Typography.Paragraph className='nav-text'>
            <Link to="/vocab" style={{ color: 'white' }}>Vocabulary</Link>
          </Typography.Paragraph>

          <Typography.Paragraph className='nav-text'>
            <Link to="/listen" style={{ color: 'white' }}>Listen</Link>
          </Typography.Paragraph>

          <Typography.Paragraph className='nav-text' >
            <Link to="/reading" style={{ color: 'white' }}>Reading</Link>
          </Typography.Paragraph>

          <Typography.Paragraph className='nav-text'>
            <Link to="/game" style={{ color: 'white' }}>Game</Link>
          </Typography.Paragraph>

        </Col>

        <Col span={12} >
          {/* <Typography.Paragraph className='nav-logout'>
            <Link to="/login" style={{ color: 'white' }}>Log out</Link>
          </Typography.Paragraph> */}
          <Dropdown className='nav-logout' overlay={menu} trigger={['hover']} placement="bottomRight">
            <a onClick={e => e.preventDefault()}>
              Trung Thịnh
            </a>
          </Dropdown>
          <Avatar className='nav-avatar' icon={<UserOutlined />} />
        </Col>
      </Row>
    </Header>
  )
}

export default AppHeader