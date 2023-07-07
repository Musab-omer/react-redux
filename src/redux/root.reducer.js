import {combineReducers} from 'redux'
import { messageCardReducer, messageFeatureKey } from './messageCard/messageCard.reducer'
import * as proudctItmeReducer from './product/proudct.reducer'

let rootReducer=combineReducers({
    // messageCard:messageCardReducer
    [messageFeatureKey]:messageCardReducer,
    [proudctItmeReducer.proudctFeatureKey]:proudctItmeReducer.reducer
})
export {rootReducer}