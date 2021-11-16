import {createStore, applyMiddleware} from "redux";
import {RootReducer} from "./rootReducer";
import logger from 'redux-logger'

//https://redux.js.org/api/applymiddleware

export const store = createStore(RootReducer, applyMiddleware(logger));