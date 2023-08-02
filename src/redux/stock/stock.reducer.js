import * as stacksAcions from './stock.action'

export const stocksFeatureKey = 'stocks'

let initialState = {
    loading: false,
    stocks: [],
    errorMessage: ""
}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case stacksAcions.FEATCH_STACKS_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ""
            }
        case stacksAcions.FEATCH_STACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                stocks: payload
            }
        case stacksAcions.FEATCH_STACKS_FAILUR:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }

        default:
           return state
    }
}