export const addVocab = (payload) => {
    return {
        type: 'vocabList/addVocab',
        payload,
    }
}

export const deleteVocab = (payload) => {
    return {
        type: 'vocabList/deleteVocab',
        payload,
    }
}