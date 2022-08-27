import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './rootReducer';
const middleWares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middleWares))
