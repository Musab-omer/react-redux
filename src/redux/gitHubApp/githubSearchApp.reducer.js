import * as githubSearchAppActions from './githubSearchApp.actions'

export const githubSearchAppFeatureKey = 'githubSearch'

let initialState = {
    loading: false,
    profile: {},
    repos: [],
    errorMessage: ''
}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
        case githubSearchAppActions.FETCH_GITHUB_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case githubSearchAppActions.FETCH_GITHUB_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: payload,
                errorMessage: ''
            }
        case githubSearchAppActions.FETCH_GITHUB_PROFILE_FIALUR:
            return {
                ...state,
                loading: false,
                profile:{},
                errorMessage: payload
            }
        case githubSearchAppActions.FETCH_GITHUB_REPOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case githubSearchAppActions.FETCH_GITHUB_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: payload,
                errorMessage: ''
            }
            case githubSearchAppActions.FETCH_GITHUB_REPOS_FIALUR:
            return {
                ...state,
                loading: false,
                repos:[],
                errorMessage: payload
            }
        default: return state
            break;
    }
}