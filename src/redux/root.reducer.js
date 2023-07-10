import { combineReducers } from 'redux';
import * as hobbySelectorReducer from './hobies/hobbySelector.reducer';
import * as hobbyRadioSelectorReducer from './hobby/hobbyRadioSelector.reducer'
import * as employeesReducer from './employees/employees.reducer'
import * as authUserReducer from './auth-user/authUser.reducer'
import * as customersRedcer from './customers/customers.reducer'

let rootReducer = combineReducers({
    [hobbySelectorReducer.hobiesFeatureKey]: hobbySelectorReducer.reducer,
    [hobbyRadioSelectorReducer.hobiesFeatureKey]:hobbyRadioSelectorReducer.reducer,
    [employeesReducer.employeeFeatureKey]:employeesReducer.reducer,
    [authUserReducer.authUserFeatureKey]:authUserReducer.reducer,
    [customersRedcer.customersFeatureKey]:customersRedcer.reducer
})
export { rootReducer }