import { combineReducers } from 'redux';
import * as usersListReducer from './users/userList.reducer';
import * as usersListSimpleReducer from './usersSimple/userListSimple.reducer'

let rootReducer = combineReducers({
    [usersListReducer.userListFeatureKey]:usersListReducer.reducer,
    [usersListSimpleReducer.userListSimpleFeatureKey]:usersListSimpleReducer.reducer
})
export { rootReducer }