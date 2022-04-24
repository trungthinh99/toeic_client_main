import { USER_DELETE_REQUEST } from "./constant"

export const addVocab = (payload) => {
    return {
        type: 'vocabList/addVocab',
        payload,
    }
}

export const deleteVocab = (data) => {
    return {
        type: USER_DELETE_REQUEST,
        payload: data
    }
}

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