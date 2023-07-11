import Axios from "axios"

export const FEATCH_CUSTOMERS_REQUEST = 'FEATCH_CUSTOMERS_REQUEST'
export const FEATCH_CUSTOEMRS_SUCCESS = 'FEATCH_CUSTOEMRS_SUCCESS'
export const FEATCH_CUSTOMERS_FIALUR = 'FATCH_CUSTOMER_FIALUR'

export const featchCustomers = () => {
    return async (dispatch) => {
        dispatch({ type: FEATCH_CUSTOMERS_REQUEST })
        try {
            let dataUrl = 'https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json'
            let response = await Axios.get(dataUrl)
            dispatch({ type: FEATCH_CUSTOEMRS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FEATCH_CUSTOMERS_FIALUR, payload: error })
        }
    }
}