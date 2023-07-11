import { combineReducers } from 'redux';
import * as contactAppReducer from './contactApp/contactApp.reducer'
let rootReducer = combineReducers({
   [contactAppReducer.contactAppFeatureKey]:contactAppReducer.reducer
})
export { rootReducer }