import { combineReducers } from 'redux';
import * as hobbySelectorReducer from './hobies/hobbySelector.reducer';

let rootReducer = combineReducers({
    [hobbySelectorReducer.hobiesFeatureKey]: hobbySelectorReducer.reducer
})
export { rootReducer }