import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Layout, Typography, Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { gameScoreChange } from '../../redux/modules/game/action';
import { gameAmountSelector, gameLoadSelector, gameScoreSelector } from '../../redux/modules/game/selector';
import "../../App.css"
import "./index.css"

const { Content } = Layout;

function Interface() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const gameScore = useSelector(gameScoreSelector)
    const gameLoad = useSelector(gameLoadSelector)
    const gameAmount = useSelector(gameAmountSelector)

    const dispatch = useDispatch();
    const nagivate = useNavigate();

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    // console.log(gameAmount);
    // console.log(gameLoad.questionList[0]);
    // console.log(gameLoad.questionList[0].incorrect_answers.length);
    
    useEffect(() => {
        const question = gameLoad.questionList[questionIndex];
        let answers = [...question.incorrect_answers];
        answers.splice(
            getRandomInt(question.incorrect_answers.length),
            0,
            question.correct_answer
        )
        setOptions(answers)
    }, [questionIndex])

    const handleClick = (e) => {
        const question = gameLoad.questionList[questionIndex];
        if (e.target.textContent === question.correct_answer) {
            dispatch(gameScoreChange(gameScore + 1))
        }

        if (questionIndex + 1 < gameAmount) {
            setQuestionIndex(questionIndex + 1)
        }else {
            nagivate('/score')
        }
    }

    return (
        <Content className="content-css">
            <div className="content-background-css">
                <Row className="row-css">
                    <Col>
                        <Typography.Paragraph
                            style={{ fontWeight: 'bold', fontSize: 18 }}
                        >
                            Question {questionIndex + 1}
                        </Typography.Paragraph>
                    </Col>
                    <Col>
                        <Typography.Paragraph
                            style={{ fontWeight: 'bold', fontSize: 26 }}
                        >
                            {gameLoad.questionList[questionIndex].question}
                        </Typography.Paragraph>
                    </Col>
                    <Col style={{ width: 840 }}>
                        {options.map((data, id) => (
                            <Button
                                key={id}
                                onClick={handleClick}
                                type='primary'
                                style={{ width: 390, height: 80, borderRadius: 15, fontSize: 20, margin: 10 }}
                            >
                                {data}
                            </Button>
                        ))}
                    </Col>
                    <Col>
                        <Typography.Paragraph
                            style={{ fontWeight: 'bold', fontSize: 18, marginTop: 26 }}
                        >
                            Score: {gameScore} / {gameAmount}
                        </Typography.Paragraph>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}

export default Interface