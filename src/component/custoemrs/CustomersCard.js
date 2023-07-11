import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customersCardFeaturKey } from '../../redux/customersCard/customersCard.reducer'
import * as custoemrsCardActions from '../../redux/customersCard/customersCard.action'
import spinnerImage from '../../assets/DzUd.gif'


let CustomersCard = () => {
    //get customers data from redx store
    let custoemrsCardInfo = useSelector((state) => {
        return state[customersCardFeaturKey]
    })
    let { loading, customers, errorMessage } = custoemrsCardInfo
    
    //dispatch featch customers 
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(custoemrsCardActions.featchCustomers())
    }, [])
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className='row'>
                        <div className='col'>
                            <h1 className='text-primary  m-0'>Customers</h1>
                            <p>Exercitation do enim tempor cillum incididunt et dolor aliqua elit nostrud. Consequat pariatur ea minim ipsum enim. Ut duis magna ut mollit laboris labore fugiat aliquip. Eu nisi Lorem deserunt fugiat tempor.
                                Esse enim mollit ipsum et do adipisicing ut. Labore fugiat id laborum elit. Sint est Lorem aliqua consectetur nostrud excepteur excepteur deserunt duis consequat. Non aute do irure ex nisi sit reprehenderit anim voluptate consequat officia in. Aliqua consequat voluptate aute dolor nulla occaecat voluptate et aute enim deserunt sint tempor.
                            </p>
                            {
                                errorMessage != "" &&
                                <div class="alert alert-danger" role="alert">
                                    {errorMessage.message}
                                </div>
                            }
                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className='col '>
                            {
                                loading ?
                                    <img src={spinnerImage} className="w-25 d-block m-auto" alt="" />:
                                customers.length > 0 ?
                                    <React.Fragment>
                                        {
                                            customers.map(customer => {
                                                return (
                                                    <div key={customer.login.uuid} className='card d-inline-block mt-3 px-2 py-5'>
                                                        <div className='card-header text-center bg-warning p-4'>
                                                            <img src={customer.picture.medium} className='img-fluid img-thumbnail rounded-circle' style={{ marginTop: "-75px", border: "5px solid darkorange" }} alt='' />
                                                        </div>
                                                        <div className='card-body bg-primary'>
                                                            <ul className='list-group'>
                                                                <li className='list-group-item card-title'>Name : {customer.name.first}</li>
                                                                <li className='list-group-item card-text'>Email : {customer.email}</li>
                                                                <li className='list-group-item card-text'>City : {customer.location.city}</li>
                                                                <li className='list-group-item card-text'>Country : {customer.location.country}</li>
                                                                <li className='list-group-item card-text'>Age : {customer.dob.age}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </React.Fragment> :null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default CustomersCard