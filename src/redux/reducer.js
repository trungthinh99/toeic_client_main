import { combineReducers } from 'redux';
import gameReducer from './modules/game/reducer';
import vocabReducer from './modules/vocab/reducer';

const rootReducer = combineReducers({
    vocab: vocabReducer,
    game: gameReducer
})

export default rootReducer