/* eslint-disable import/no-cycle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from "redux-localstorage-simple"
import promiseMiddleware from './promiseMiddleware';
// eslint-disable-next-line import/no-cycle
import rootReducer from './reducer';

export const store = createStore(rootReducer, load(), composeWithDevTools(
    applyMiddleware(promiseMiddleware),
    applyMiddleware(save())
));
