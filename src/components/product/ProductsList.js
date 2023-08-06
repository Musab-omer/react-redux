import React, { useEffect } from "react";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { productFeatureKey } from '../../redux/product/product.reducer';
import * as proudctActions from '../../redux/product/product.actions';
import imgSpinner from '../../assets/DzUd.gif';

let ProductsList = () => {
    let productsInfo = useSelector((state) => {
        return state[productFeatureKey];
    })
    let { loading, products, errorMessage } = productsInfo;
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(proudctActions.fetchProduct())
    }, [])

    
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-primary">Products List</h1>
                        <p className="lead">In deserunt labore voluptate labore. Duis commodo dolore ipsum ut dolore esse. Eu fugiat laborum nostrud aliquip non minim. Aliqua commodo deserunt adipisicing ipsum consequat esse enim pariatur enim ad ea id do excepteur.</p>
                    </div>
                </div>
                <div className="row">
                        {

                            loading ?
                                <img src={imgSpinner} className="w-25 h-25 m-auto" alt="" /> :
                                products.length > 0 ?
                                    <React.Fragment>
                                        {
                                            products.map(product => {
                                                return (
                                                    <div className="col-md-3">
                                                    <div className="card">
                                                    <img src={product.image} className="card-img-top" alt="" />
                                                        <div className="card-body">
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item"><span className="fw-bold">Name :</span> {product.name}</li>
                                                                <li className="list-group-item"><span className="fw-bold">Price :</span> {product.price}</li>
                                                                <li className="list-group-item"><span className="fw-bold">Qty :</span> {product.qty}</li>
                                                                <li className="list-group-item"><span className="fw-bold">Info :</span> {product.info}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div> 
                                                );
                                                
                                            })
                                        }
                                    </React.Fragment> : null
                        }
                   
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductsList;