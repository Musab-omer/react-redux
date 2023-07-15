import { combineReducers } from 'redux'
import * as employeeReducer from '../redux/employee/employee.reducer'
let rootReducer = combineReducers({
    [employeeReducer.employeeFeatureKey]:employeeReducer.reducer
})
export { rootReducer }