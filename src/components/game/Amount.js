import React from 'react';
import { Layout, Typography, Row, Col, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { amountChange } from '../../redux/modules/game/action';
import '../../App.css';
import './index.css';

const { Content } = Layout;

function Amount() {
  const dispatch = useDispatch();
  return (
    <Content className="content-css">
      <div className="content-background-css">
        <Row className="row-css">
          <Col>
            <Typography.Paragraph style={{ fontWeight: 'bold', fontSize: 38, marginBottom: 15 }}>
              Amount
            </Typography.Paragraph>
          </Col>
          <Col>
            <Input onChange={(e) => dispatch(amountChange(e.target.value))} type="number" style={{ width: 250 }} />
          </Col>
          <Col>
            <Link to="/playgame">
              <Button type="primary" style={{ fontSize: 15, height: 42, borderRadius: 5, marginTop: 29 }}>
                Play Game
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Amount;
