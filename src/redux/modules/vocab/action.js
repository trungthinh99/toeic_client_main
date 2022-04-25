import { VOCAB_ADD, VOCAB_DELETE } from "./constant"

export const addVocab = (payload) => {
    return {
        type: VOCAB_ADD,
        payload,
    }
}

export const deleteVocab = (data) => {
    return {
        type: VOCAB_DELETE,
        payload: data
    }
}