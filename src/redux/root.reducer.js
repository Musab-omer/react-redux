import { combineReducers } from 'redux';
import * as usersListReducer from './users/userList.reducer';

let rootReducer = combineReducers({
    [usersListReducer.userListFeatureKey]:usersListReducer.reducer
})
export { rootReducer }