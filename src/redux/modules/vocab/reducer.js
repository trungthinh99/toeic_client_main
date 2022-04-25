import { VOCAB_ADD, VOCAB_DELETE } from "./constant"
import { vocabData } from "./Data"

const initState = {
    vocabList: vocabData
}

const vocabReducer = (state = initState, action) => {
    switch (action.type) {
        case VOCAB_ADD:
            return {
                ...state,
                vocabList: [
                    ...state.vocabList,
                    action.payload
                ]
            }
        
        case VOCAB_DELETE:
            return {
                ...state,
                vocabList: state.vocabList.filter((vocab) => vocab.key !== action.payload.key)
            }
        
        default:
            return state;
    }
}

export default vocabReducer