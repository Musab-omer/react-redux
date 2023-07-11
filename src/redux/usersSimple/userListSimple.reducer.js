import * as userListSimpleAction from './userListSimple.actions'

export const userListSimpleFeatureKey = 'usersListSimple'

let initialState = {
    loading: false,
    users: [],
    errorMessage: ''
}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
        case userListSimpleAction.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userListSimpleAction.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload,
                errorMessage: ''
            }
        case userListSimpleAction.FETCH_USERS_FAILUR:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        default: return state
    }
}
