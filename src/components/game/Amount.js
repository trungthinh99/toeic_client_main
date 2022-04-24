import React from 'react'
import { Layout, Typography, Row, Col, Button, Input } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { amountChange } from '../../redux/actions';

const { Content } = Layout;

function Amount() {
  const dispatch = useDispatch();
  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50, minHeight: '85vh' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: '78vh', borderRadius: 10, }}>
        <Row justify="center" align="middle" style={{ height: 450, flexDirection: 'column', display: 'flex' }}>
          <Col>
            <Typography.Paragraph
              style={{ fontWeight: 'bold', fontSize: 38, marginBottom: 15 }}
            >
              Amount
            </Typography.Paragraph>
          </Col>
          <Col>
            <Input
              onChange={e => dispatch(amountChange(e.target.value))}
              type="number"
              style={{ width: 250 }}
            />
          </Col>
          <Col>
            <Link to="/playgame">
              <Button
                type="primary"
                style={{ fontSize: 15, height: 42, borderRadius: 5, marginTop: 29 }}
              >
                Play Game
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default Amount