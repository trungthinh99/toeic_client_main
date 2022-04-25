import { GAME_AMOUNT_CHANGE, GAME_SCORE_CHANGE } from "./constant";
import { quizData } from "./Data";

const initState = {
    questionList: quizData,
    score: 0,
    amount: 2
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case GAME_SCORE_CHANGE:
            return {
                ...state,
                score: action.payload
            }

        case GAME_AMOUNT_CHANGE:
            return {
                ...state,
                amount: action.payload
            }

        default:
            return state;
    }
}

export default gameReducer