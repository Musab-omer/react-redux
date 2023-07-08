import {combineReducers} from 'redux'
import * as carReducer from './care/care.reducer'
let rootReducer=combineReducers({
 [carReducer.carFeatureKey]:carReducer.reducer
})
export {rootReducer}