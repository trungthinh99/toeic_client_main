import React from 'react'
import { Layout, Typography, Row, Col, Form, Input, Button } from 'antd';
import "../../../App.css"
import "./index.css"

const { Content } = Layout;

function Register() {
  return (
    <Content className='content-css'>
      <div className='content-background-css'>
        <Row justify='center' style={{ flexDirection: 'column', height: 510 }}>
          <Col>
            <Typography.Paragraph className='form-item'>
              Đăng ký
            </Typography.Paragraph>
          </Col>
          <Col>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Mail"
                name="mail"
                rules={[{ required: true, message: 'Please input your mail' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default Register