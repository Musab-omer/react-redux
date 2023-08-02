import Axios from 'axios'
export const FEATCH_STACKS_REQUEST = 'FEATCH_STACKS_REQUEST'
export const FEATCH_STACKS_SUCCESS = 'FEATCH_STACKS_SUCCESS'
export const FEATCH_STACKS_FAILUR = 'FEATCH_STACKS_FAILUR'

export const featchStacks = () => {
    return (async (dispatch) => {
        try {
            dispatch({ type: FEATCH_STACKS_REQUEST })
            let dataUrl = 'https://gist.githubusercontent.com/Musab-omer/e0d8f63c6eff9cea5f488e24a110d795/raw/4a0ec7593acd7400022fca3c0b886182c732a7c2/stocks-03-06-2023.json'
            let response = await Axios.get(dataUrl)
            dispatch({ type: FEATCH_STACKS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FEATCH_STACKS_FAILUR, payload: error })
        }
    })
}