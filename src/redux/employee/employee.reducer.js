import Employees from '../../components/employee/Employees'
import * as employeeActions from './employee.action'

export const employeeFeatureKey = "employees"

let initialState = {
    loading: false,
    employees: [],
    errorMessage: ""
}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case employeeActions.FEATCH_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ""
            }
        case employeeActions.FEATCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: payload
            }
        case employeeActions.FEATCH_EMPLOYEES_FAILUR:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
                Employees:[]
            }
        default:
            return state
    }
}