import { quizData } from '../components/game/Data'
import { vocabData } from '../components/vocab/Data'
import {USER_DELETE_SUCCESS } from './constant'

const initState = {
    vocabList: vocabData,
    game: {
        quizData,
        score: 0,
        amount: 2
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'vocabList/addVocab':
            return {
                ...state,
                vocabList: [
                    ...state.vocabList,
                    action.payload
                ]
            }

        case USER_DELETE_SUCCESS:
            return {
                ...state,
                vocabList: state.vocabList.filter((vocab) => vocab.key !== action.payload.key)
            }

        case 'game/gameScoreChange':
            return {
                ...state,
                game: {
                    ...state.game,
                    score: action.payload
                }
            }      
            
        case 'game/amountChange':
            return {
                ...state,
                game: {
                    ...state.game,
                    amount: action.payload
                }
            }      

        default:
            return state;
    }
}

export default rootReducer