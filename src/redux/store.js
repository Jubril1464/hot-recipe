import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
const middleWares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWares))
 const persistor = persistStore(store)
export {store, persistor}