import { VOCAB_ADD, VOCAB_DELETE, VOCAB_EDIT } from "./constant"
import { vocabData } from "./Data"

const initState = {
    list: vocabData
}

const vocabReducer = (state = initState, action) => {
    switch (action.type) {
        case VOCAB_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }

        case VOCAB_EDIT:
            return {
                ...state,
                list: state.list.map(word => {
                    return word.key === action.payload.key ? action.payload : word
                })
            }
        
        case VOCAB_DELETE:
            return {
                ...state,
                list: state.list.filter((vocab) => vocab.key !== action.payload)
            }
        
        default:
            return state;
    }
}

export default vocabReducer