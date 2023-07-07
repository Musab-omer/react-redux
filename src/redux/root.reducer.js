import {combineReducers} from 'redux'
import { messageCardReducer, messageFeatureKey } from './messageCard/messageCard.reducer'

let rootReducer=combineReducers({
    // messageCard:messageCardReducer
    [messageFeatureKey]:messageCardReducer
})
export {rootReducer}