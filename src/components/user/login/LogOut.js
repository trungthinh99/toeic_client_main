import React from 'react'
import { Layout, Typography, Row, Col, Form, Input, Button, Checkbox } from 'antd';
import "../../../App.css"

const { Content } = Layout;

function LogIn() {
    return (
        <Content className="content-css">
            <div className="content-background-css">
                <Row justify='space-around' align='middle' style={{ height: 450, }}>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
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

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                </Row>
            </div>
        </Content>
    )
}

export default LogIn