import Axios from "axios";

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PROUDCT_FAILUR = 'FETCH_PROUDCT_FAILUR';

export const fetchProduct = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_PRODUCT_REQUEST });
            let dataUrl = 'http://127.0.0.1:5000/api/products';
            let response = await Axios.get(dataUrl);
            dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: response.data });
        }
        catch (error) {
            dispatch({ type: FETCH_PROUDCT_FAILUR, payload: error })
        }
    }
}

