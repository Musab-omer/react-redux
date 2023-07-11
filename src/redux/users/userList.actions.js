import Axios from 'axios'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILUR = 'FETCH_USER_FAILUR'

let fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

let fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

let fetchUserFailur = (error) => {
    return {
        type: FETCH_USER_FAILUR,
        payload: error
    }
}

//the real action  
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        let dataUerl = 'https://jsonplaceholder.typicode.com/users'
        Axios.get(dataUerl).then((response) => {
            dispatch(fetchUserSuccess(response.data))
        }).catch((error) => {
            dispatch(fetchUserFailur(error))
        })
    }
}