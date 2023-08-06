import React from "react";
import { Link } from "react-router-dom";

let UpdateProduct = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-primary">Update Product</h1>
                        <p className="lead">Excepteur incididunt aliqua cillum duis sit esse ea. Ipsum deserunt quis amet elit non. Proident et laboris culpa cupidatat labore ut ex anim. Aliquip sint ullamco veniam dolor aliquip.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <p className="h4 text-white">Edit Proudct</p>
                            </div>
                            <div className="card-body bg-warning">
                                <form>
                                    <div className="mb-3">
                                        <label for="proudctName" className="form-label">Prdouct Name</label>
                                        <input type="text" id="productName" className="form-control" placeholder="Enter product name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="productImage" className="form-label">Product Image</label>
                                        <input type="file" id="productImage" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="proudctQuntity" className="form-label">Quanity</label>
                                        <input type="number" id="proudctQuntity" className="form-control" placeholder="Enter product quantity" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="productInfo" className="form-label">Product Details</label>
                                        <textarea cols="30" rows="5" id="productInfo" className="form-control" placeholder="Enter product details" />
                                    </div>
                                    <div className="mb-3">
                                        <Link to='/products/admin' className="btn btn-dark">back to list</Link>
                                        <input type="submit" className="btn btn-success mx-3" value="update"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default UpdateProduct;