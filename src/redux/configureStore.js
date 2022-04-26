import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { watcherDeleteUserSaga } from './saga'

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];

const composedEnhancers = composeWithDevTools()

const store = createStore(rootReducer, composedEnhancers);
// const store = compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )(createStore)(rootReducer);

// sagaMiddleware.run(watcherDeleteUserSaga);

export default store;