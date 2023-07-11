import Axios from "axios"

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST'
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS'
export const FETCH_CONTACT_FIALUR = 'FETCH_CONTACT_FIALUR'
export const SELECTED_CONTACT = 'SELECTED_CONTACT'

export const fetchContacts = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CONTACT_REQUEST })
        try {
            let dataUrl = 'https://gist.githubusercontent.com/Musab-omer/59475f20b0d1fcb3268b3fc4bcab3015/raw/ee38dfe4276eb9c0b16ca02af1402e4862158101/customers.31-05-2023.json'
            let response = await Axios.get(dataUrl)
            dispatch({ type: FETCH_CONTACT_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_CONTACT_FIALUR, payload: error })
        }
    }
}

export const selectedContact = (contact) => {
    return { type: SELECTED_CONTACT, payload: contact }
}