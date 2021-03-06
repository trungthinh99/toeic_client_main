import React from 'react'
import { Layout, Typography, Row, Col, Form, Input, Button } from 'antd';
import "../../../App.css"

const { Content } = Layout;

function LogIn() {
  return (
    <Content className='content-css'>
      <div className='content-background-css'>
        <Row justify='center' style={{ flexDirection: 'column', height: 510 }}>
          <Col>
            <Typography.Paragraph className='form-item'>
              Đăng nhập
            </Typography.Paragraph>
          </Col>
          <Col>
            <Form
              name="basic"
              labelCol={{ span: 9 }}
              wrapperCol={{ span: 6 }}
            >
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

              <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
                <Button type="primary" htmlType="submit" style={{ marginTop: 15 }}>
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default LogIn