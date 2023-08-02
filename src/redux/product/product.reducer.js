import * as productActions from './product.actions';

export const productFeatureKey = 'products';
let initialState = {
    loading: false,
    products: [],
    errorMessage: ''
}
export const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case productActions.FETCH_PRODUCT_REQUEST:
            return state = {
                loading: true,
                errorMessage: ''
            }
        case productActions.FETCH_PRODUCT_SUCCESS:
            return state = {
                loading: false,
                products: payload
            }
        case productActions.FETCH_PROUDCT_FAILUR:
            return state = {
                loading: false,
                errorMessage: payload
            }
    }
}