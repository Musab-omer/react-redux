import {combineReducers} from 'redux'
import { messageCardReducer, messageFeatureKey } from './messageCard/messageCard.reducer'
import * as proudctItmeReducer from './product/proudct.reducer'
import * as counterReducre from './counter/counter.reducer'

let rootReducer=combineReducers({
    // messageCard:messageCardReducer
    [messageFeatureKey]:messageCardReducer,
    [proudctItmeReducer.proudctFeatureKey]:proudctItmeReducer.reducer,
    [counterReducre.counterFeatureKey]:counterReducre.reducer
})
export {rootReducer}