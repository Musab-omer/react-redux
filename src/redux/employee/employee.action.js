import Axios from "axios"

export const FEATCH_EMPLOYEES_REQUEST = 'FEATCH_EMPLOYEES_REQUEST'
export const FEATCH_EMPLOYEES_SUCCESS = 'FEATCH_EMPLOYEES_SUCCESS'
export const FEATCH_EMPLOYEES_FAILUR = 'FEATCH_EMPLOYEES_FAILUR'

export const fetchEmployees = () => {
    return (async (dispatch) => {
        try {
            dispatch({ type: FEATCH_EMPLOYEES_REQUEST })
            let dataUrl = 'https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json'
            let response = await Axios.get(dataUrl)
            dispatch({type:FEATCH_EMPLOYEES_SUCCESS,payload:response.data})
        } catch (error) {
            dispatch({type:FEATCH_EMPLOYEES_FAILUR,payload:error})
        }
    })
}