import React, { useState } from 'react';
import { Row, Col, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { filterVocab } from '../../../redux/modules/vocab/action';

function FilterVocab() {
  const [searhText, setSearhText] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearhText(e.target.value);
    dispatch(filterVocab(e.target.value));
  };
  return (
    <Row>
      <Col>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', fontSize: 17, lineHeight: 2 }}
        >
          Tìm kiếm từ vựng:
        </Typography.Paragraph>
      </Col>
      <Col>
        <Input
          style={{ marginLeft: 15, borderRadius: 14 }}
          placeholder="Enter text..."
          value={searhText}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
}

export default FilterVocab;
