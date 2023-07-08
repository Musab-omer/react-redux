import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { proudctFeatureKey } from "../redux/product/proudct.reducer";
import * as proudctAction from '../redux/product/proudct.actions';

let Product = () => {

    //get data from REDUX store
    let proudctInfo=useSelector((stata)=>{
        return stata[proudctFeatureKey]
    });
    let {product}=proudctInfo;
    //dispatch an trigger
    let dispatch=useDispatch();

    let decreaseQty = () => {
       dispatch( proudctAction.decreseQty());
    }
    let increaseQty = () => {
        dispatch(proudctAction.increaseQty());
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary">Products Card</p>
                        <p>Ipsum Lorem consectetur ex aliqua nulla enim elit eu cupidatat quis ullamco. Deserunt ad enim do duis aute velit do. Nostrud laborum ipsum velit est nulla dolore do consequat cupidatat quis anim nulla labore ullamco. Et pariatur aute et excepteur magna laborum magna deserunt occaecat ullamco culpa reprehenderit. Sunt irure sint Lorem Lorem reprehenderit officia labore commodo amet amet fugiat.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">

                        <table className="table table-hover table-striped table-dark text-center">
                            <thead>
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.id}</td>
                                    <td><img src={product.image} width="30rm" height="30rm" /></td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><i className="fa fa-minus-circle mx-2" onClick={decreaseQty} />{product.qty}
                                        <i className="fa fa-plus-circle mx-2" onClick={increaseQty} /></td>
                                    <td>&euro;{product.price * product.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}
export default Product;