import {combineReducers} from 'redux';
import * as carReducer from './care/care.reducer';
import * as messageReducer from './message/message.reducer';
import * as registerReducer from './registration/register.reducer';
let rootReducer=combineReducers({
 [carReducer.carFeatureKey]:carReducer.reducer,
 [messageReducer.messageFeatureKey]:messageReducer.reducer,
 [registerReducer.registerFeatureKey]:registerReducer.reducer
})
export {rootReducer}