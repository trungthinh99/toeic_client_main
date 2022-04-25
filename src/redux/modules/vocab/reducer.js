import { VOCAB_ADD, VOCAB_DELETE } from "./constant"
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
        
        case VOCAB_DELETE:
            return {
                ...state,
                list: state.list.filter((vocab) => vocab.key !== action.payload.key)
            }
        
        default:
            return state;
    }
}

export default vocabReducer