import Axios from "axios"

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILUR = 'FETCH_USERS_FAILUR'

export const fetchUsersList = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST })
        let dataUrl = 'https://jsonplaceholder.typicode.com/users'
        try {
            let response = await Axios.get(dataUrl)
            dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_USERS_FAILUR, payload: error })
        }
    }
}