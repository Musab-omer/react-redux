import { combineReducers } from 'redux'
import * as productReducer from './product/product.reducer';
let rootReducer = combineReducers({
    [productReducer.productFeatureKey]:productReducer.reducer
})
export { rootReducer }