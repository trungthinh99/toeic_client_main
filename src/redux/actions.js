import { VOCAB_DELETE } from "./constant"


export const gameLoad = (payload) => {
    return {
        type: 'game/gameLoad',
        payload,
    }
}

export const gameScoreChange = (payload) => {
    return {
        type: 'game/gameScoreChange',
        payload,
    }
}

export const amountChange = (payload) => {
    return {
        type: 'game/amountChange',
        payload,
    }
}