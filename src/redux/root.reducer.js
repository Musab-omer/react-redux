import {combineReducers} from 'redux';
import * as carReducer from './care/care.reducer';
import * as messageReducer from './message/message.reducer';
let rootReducer=combineReducers({
 [carReducer.carFeatureKey]:carReducer.reducer,
 [messageReducer.messageFeatureKey]:messageReducer.reducer
})
export {rootReducer}