import * as customersCardActions from './customersCard.action'

export const customersCardFeaturKey = 'customersCard'

let initialState = {
    loading: false,
    customers: [],
    errorMessage: ""
}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case customersCardActions.FEATCH_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case customersCardActions.FEATCH_CUSTOEMRS_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: payload,
                errorMessage: ""
            }
            case customersCardActions.FEATCH_CUSTOMERS_FIALUR:
                return{
                    ...state,
                    loading:false,
                    errorMessage:payload
                }

        default: return state
    }
}

