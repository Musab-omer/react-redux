import { combineReducers } from 'redux'
import * as githubSearchAppReducer from './gitHubApp/githubSearchApp.reducer'
let rootReducer = combineReducers({
    [githubSearchAppReducer.githubSearchAppFeatureKey]:githubSearchAppReducer.reducer
})
export { rootReducer }