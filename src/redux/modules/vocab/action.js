import { VOCAB_ADD, VOCAB_DELETE, VOCAB_EDIT } from "./constant"

export const addVocab = (payload) => {
    return {
        type: VOCAB_ADD,
        payload,
    }
}

export const editVocab = (data) => {
    return {
        type: VOCAB_EDIT,
        payload: data,
    }
}

export const deleteVocab = (data) => {
    return {
        type: VOCAB_DELETE,
        payload: data
    }
}