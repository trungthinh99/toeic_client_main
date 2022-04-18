import { vocabData } from '../components/vocab/Data'

const initState = {
    vocabList: vocabData
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'vocabList/addVocab':
            return {
                ...state,
                vocabList: [
                    ...state.vocabList,
                    action.payload
                ]
            }
    }
}

export default rootReducer