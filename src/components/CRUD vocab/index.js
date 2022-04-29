import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, Row, Col, Form, Input } from 'antd';
import { modalAddVocab, modalClose } from '../../redux/modules/vocab/modal/action';
import { modalSelector } from '../../redux/modules/vocab/modal/selector';
import { addVocab, editVocab } from '../../redux/modules/vocab/action';
import { vocabListSelector } from '../../redux/modules/vocab/selector';
import { getUserByID } from '../../redux/selectors';

const initialValues = {
  name: "",
  type: "",
  mean: ""
}

function ModalCrud() {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector)
  const vocab = useSelector(vocabListSelector)
  const userGetbyID = useSelector(getUserByID);
  console.log(userGetbyID);
  
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [mean, setMean] = useState();
  
  const [form] = Form.useForm();

  const showModal = () => {
    dispatch(modalAddVocab())
  };

  const handleOk = () => {
    if(!name) return;
    if (modal.key) {
      dispatch(editVocab({
        key: userGetbyID.key,
        name,
        type,
        mean,
      }))
    } else {
      dispatch(addVocab({
        key: vocab[vocab.length - 1].key + 1,
        name,
        type,
        mean,
      }))
      form.setFieldsValue(initialValues);
    }
    dispatch(modalClose());
    form.setFieldsValue(initialValues);
  };

  const handleCancel = () => {
    dispatch(modalClose());
  };

  useEffect(() => {
    if (modal.key) {
      setName(userGetbyID.name)
      setType(userGetbyID.type)
      setMean(userGetbyID.mean)
      form.setFieldsValue({
        name: userGetbyID.name,
        type: userGetbyID.type,
        mean: userGetbyID.mean
      })
    }
  }, [modal.key, userGetbyID, form])
  
  return (
    <Row justify='center'>
      <Col>
        <Button
          type="primary"
          onClick={showModal}
        >
          Add Vocabulary
        </Button>
        <Modal
          width={400}
          forceRender
          centered
          title={modal.key ? "Chỉnh sửa từ vựng" : "Thêm từ vựng" }
          visible={modal.isToggle}
          onCancel={handleCancel}
          onOk={handleOk}
          footer={[
            <Button key='back' onClick={handleCancel}>Close</Button>,
            <Button key='submit' type='primary' onClick={handleOk}>OK</Button>
          ]}
        >
          <Form
            name="crud-form"
            form={form}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <Form.Item
              label="Từ vựng"
              name="name"
              rules={[{ required: true, message: 'Bắt buộc điền từ vựng!' }]}
            >
              <Input onChange={e => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Loại từ"
              name="type"
              rules={[{ required: true, message: 'Bắt buộc điền loại từ!' }]}
            >
              <Input onChange={e => setType(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Nghĩa"
              name="mean"
              rules={[{ required: true, message: 'Bắt buộc điền nghĩa!' }]}
            >
              <Input onChange={e => setMean(e.target.value)}/>
            </Form.Item>
          </Form>
        </Modal>
      </Col>
    </Row>
  )
}

export default ModalCrud