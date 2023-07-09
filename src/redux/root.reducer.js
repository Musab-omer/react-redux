import { combineReducers } from 'redux';
import * as hobbySelectorReducer from './hobies/hobbySelector.reducer';
import * as hobbyRadioSelectorReducer from './hobby/hobbyRadioSelector.reducer'

let rootReducer = combineReducers({
    [hobbySelectorReducer.hobiesFeatureKey]: hobbySelectorReducer.reducer,
    [hobbyRadioSelectorReducer.hobiesFeatureKey]:hobbyRadioSelectorReducer.reducer
})
export { rootReducer }