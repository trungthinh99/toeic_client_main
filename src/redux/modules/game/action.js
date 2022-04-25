import { GAME_SCORE_CHANGE, GAME_LOAD, GAME_AMOUNT_CHANGE } from "./constant"

export const gameLoad = (payload) => {
    return {
        type: GAME_LOAD,
        payload,
    }
}

export const gameScoreChange = (payload) => {
    return {
        type: GAME_SCORE_CHANGE,
        payload,
    }
}

export const amountChange = (payload) => {
    return {
        type: GAME_AMOUNT_CHANGE,
        payload,
    }
}