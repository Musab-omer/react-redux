import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import {rootReducer} from './root.reducer'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

let middlWars=[logger,thunk]

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlWars)))
export {store}