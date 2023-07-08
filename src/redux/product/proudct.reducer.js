import * as proudctAction from "./proudct.actions"

//feature key
export const proudctFeatureKey = 'proudct'

//initial stata
let initialState = {
    product: {
        id: 'AA45BB#',
        image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-13-pro-max-gold.png?v=34',
        name: 'Iphone 14 pro max',
        price: 1039,
        qty: 10
    }
}

//reducer
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case proudctAction.DECRESE_QTY:
            return {
                product: {
                    ...state.product,
                    qty: (state.product.qty - 1 > 0) ? state.product.qty - 1 : 1
                }
            }
            //break;
        case proudctAction.INCREASE_QTY:
            return {
                product: {
                    ...state.product,
                    qty: state.product.qty + 1
                }
            }
            //break;
        default: return state
    }
}