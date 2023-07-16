import { combineReducers } from 'redux'
import * as employeeReducer from '../redux/employee/employee.reducer'
import * as stacksReducer from './stock/stock.reducer'
let rootReducer = combineReducers({
    [employeeReducer.employeeFeatureKey]:employeeReducer.reducer,
    [stacksReducer.stacksFeatureKey]:stacksReducer.reducer
})
export { rootReducer }