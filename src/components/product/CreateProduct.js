import React from "react";
import { Link } from "react-router-dom";

let CreateProduct = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="col">
                            <h1 className="text-primary">Create Product</h1>
                            <p className="lead">Eu aute deserunt laborum id ullamco ipsum in non nostrud. Deserunt nulla et pariatur sint tempor. Occaecat nisi enim in do eiusmod. Sit dolor mollit et exercitation officia laborum ut ex incididunt reprehenderit id.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <p className="h4 text-white">New Product</p>
                            </div>
                            <div className="card-body bg-warning">
                                <form>
                                    <div className="mb-3">
                                        <label for="productName" className="form-label">Prdouct Name</label>
                                        <input type="text" className="form-control" id="proudctName" placeholder="Enter product name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="proudctImage" className="form-label">Product Image</label>
                                        <input type="file" id="proudctImage" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="proudctQty" className="form-label">Quantity</label>
                                        <input type="number" id="productQty" className="form-control" placeholder="Enter proudct quantity" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="proudctInfo" className="form-label">Details</label>
                                        <textarea id="proudctInof" rows="5" col="30" className="form-control" placeholder="Enter Product Details" />
                                    </div>
                                    <div className="mb-3">
                                        <Link to='/products/admin' className="btn btn-dark">back to list</Link>
                                        <input type="submit" className="btn btn-primary mx-3" value="save"/>
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
export default CreateProduct;