import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productFeatureKey } from '../../redux/product/product.reducer';
import { fetchProduct } from '../../redux/product/product.actions';
import imgSpinner from '../../assets/DzUd.gif';

let Admin = () => {
    let productsInfo = useSelector((state) => {
        return state[productFeatureKey]
    });
    let { loading, products, errorMessage } = productsInfo;
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [])
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-primary">Admin Dashbord</h1>
                        <p className="lead">Eiusmod quis laborum minim enim fugiat consequat mollit exercitation duis enim tempor ut incididunt nostrud. Minim irure pariatur consectetur fugiat. Tempor tempor ad et ad amet. Magna sint in tempor consequat ipsum sint veniam fugiat mollit magna eiusmod laboris pariatur. Labore exercitation sit commodo eiusmod consectetur velit. Elit velit proident tempor amet.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to='/products/create' className="btn btn-success">Create Product</Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-hover table-striped table-light text-center table-sm">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Created On</th>
                                    <th>Updated On</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {
                                loading ?
                                    <tbody>
                                        <tr>
                                            <td colSpan="7"> <img src={imgSpinner} className="w-25" alt="" /></td>
                                        </tr>
                                    </tbody> :
                                    products.length > 0 ? <React.Fragment>
                                        <tbody>
                                            {
                                                products.map(product => {
                                                    return (
                                                        <tr key={product._id}>
                                                            <td>{product._id}</td>
                                                            <td>{product.name}</td>
                                                            <td>{product.price}</td>
                                                            <td>{product.qty}</td>
                                                            <td>{product.createdOn}</td>
                                                            <td>{product.updatedOn}</td>
                                                            <td className="">
                                                                <Link to={`/products/${product._id}`} className="btn btn-warning btn-sm">Update</Link>
                                                                <Link to={`/products/${product._id}`} className="btn btn-danger btn-sm">Delete</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </React.Fragment> : null
                            }
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Admin;