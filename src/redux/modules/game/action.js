import { GAME_AMOUNT, GAME_LOAD, GAME_SCORE } from "./constant"

export const gameLoad = (payload) => {
    return {
        type: GAME_LOAD,
        payload,
    }
}

export const gameScoreChange = (payload) => {
    return {
        type: GAME_SCORE,
        payload,
    }
}

export const amountChange = (payload) => {
    return {
        type: GAME_AMOUNT,
        payload,
    }
}