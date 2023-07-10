import React from "react";
import { customerData } from "../DataSource/customerStore";
import { useSelector } from "react-redux";
import  {customersFeatureKey} from '../redux/customers/customers.reducer'

let Customers =()=>{
    let customersInfo=useSelector((state)=>{
        return state[customersFeatureKey]
    })

    return(
        <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped table-responsive-md table-primary">
                                <thead className="table-dark fw-bolder text-uppercase text-center">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">picture</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">gender</th>
                                        <th scope="col">city</th>
                                        <th scope="col">email</th>
                                        <th scope="col">age</th>
                                        <th scope="col">phone</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        customersInfo.customers.map(customer => {
                                            return (
                                                <tr key={customer.login.uuid}>
                                                    <th scope="row">{customer.login.uuid.substring(customer.login.uuid.length-4)}</th>
                                                    <td><img src={customer.picture.large} width="50px" height="40px" alt="" /></td>
                                                    <td>{customer.name.first}</td>
                                                    <td>{customer.gender}</td>
                                                    <td>{customer.location.city}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.dob.age}</td>
                                                    <td>{customer.phone}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
}
export default Customers;