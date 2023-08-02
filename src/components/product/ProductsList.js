import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFeatureKey } from '../../redux/product/product.reducer';
import * as proudctActions from '../../redux/product/product.actions';

let ProductsList = () => {
    let productsInfo = useSelector((state) => {
        return state[productFeatureKey];
    })
    let dispatch = useDispatch();
    useEffect = (() => {
        dispatch(proudctActions.fetchProduct)
    }, [])
    return (
        <React.Fragment>
            <h1>Products List</h1>
        </React.Fragment>
    )
}
export default ProductsList;