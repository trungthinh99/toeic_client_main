import { combineReducers } from 'redux';
import gameReducer from './modules/game/reducer';
import modalReucer from './modules/vocab/modal/reducer';
import vocabReducer from './modules/vocab/reducer';

const rootReducer = combineReducers({
    vocab: vocabReducer,
    game: gameReducer,
    modal: modalReucer
})

export default rootReducer