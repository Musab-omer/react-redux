import { combineReducers } from 'redux';
import * as usersListReducer from './users/userList.reducer';
import * as usersListSimpleReducer from './usersSimple/userListSimple.reducer'
import * as customresCardReducer from './customersCard/customersCard.reducer'

let rootReducer = combineReducers({
    [usersListReducer.userListFeatureKey]:usersListReducer.reducer,
    [usersListSimpleReducer.userListSimpleFeatureKey]:usersListSimpleReducer.reducer,
    [customresCardReducer.customersCardFeaturKey]:customresCardReducer.reducer
})
export { rootReducer }