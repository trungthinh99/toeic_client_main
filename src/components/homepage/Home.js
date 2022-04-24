import React from 'react'
import { Layout, Tabs, Row, Col } from 'antd';
import Welcome from './Welcome';
import ReadTab from './ReadTab';
import ListenTab from './ListenTab';
import VocabTab from './VocabTab';
import GameTab from './GameTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faSmile, faBook, faGamepad, faHeadphones } from '@fortawesome/free-solid-svg-icons'

const { Content } = Layout;
const { TabPane } = Tabs;

function Home() {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50, minHeight: '85vh' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '78vh', borderRadius: 10 }}>
                <Row justify="center">
                    <Col>
                        <Tabs defaultActiveKey="3" centered>
                            <TabPane tab={<span style={{ fontSize: 15, marginLeft: 10, marginRight: 10 }}><FontAwesomeIcon icon={faEye} /> Reading</span>} key="1">
                                <ReadTab />
                            </TabPane>
                            <TabPane tab={<span style={{ fontSize: 15, marginLeft: 10, marginRight: 10 }}><FontAwesomeIcon icon={faHeadphones} /> Listening</span>} key="2">
                                <ListenTab />
                            </TabPane>
                            <TabPane tab={<span style={{ fontSize: 15, marginLeft: 10, marginRight: 10 }}><FontAwesomeIcon icon={faSmile} /> Welcome</span>} key="3">
                                <Welcome />
                            </TabPane>
                            <TabPane tab={<span style={{ fontSize: 15, marginLeft: 10, marginRight: 10 }}><FontAwesomeIcon icon={faBook} /> Vocabulary</span>} key="4">
                               <VocabTab />
                            </TabPane>
                            <TabPane tab={<span style={{ fontSize: 15, marginLeft: 10, marginRight: 10 }}><FontAwesomeIcon icon={faGamepad} /> Game</span>} key="5">
                                <GameTab />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}

export default Home