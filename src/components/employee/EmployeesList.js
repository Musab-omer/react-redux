import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeeFeatureKey } from '../../redux/employee/employee.reducer'
import * as employeeActions from '../../redux/employee/employee.action'
import { Link } from "react-router-dom";
import spinnerImg from '../../assets/DzUd.gif'

let Employees = () => {
    let employeesInfo = useSelector((state) => {
        return state[employeeFeatureKey]
    })
    let { loading, employees, errorMessage } = employeesInfo

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(employeeActions.fetchEmployees())
    }, [])

    return (
        <React.Fragment>
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h1>Employees</h1>
                            <p>Nostrud irure pariatur cillum elit. Laboris amet ea enim aliqua labore dolore commodo consequat. Mollit voluptate adipisicing nulla laborum ipsum excepteur qui labore eu. Laboris labore Lorem proident enim pariatur irure elit. Cillum excepteur esse fugiat qui quis magna ipsum esse exercitation eu adipisicing enim reprehenderit. Est labore esse quis ut in consequat quis ipsum Lorem sunt consequat nisi ad.</p>

                            {
                                errorMessage != "" ?
                                    <React.Fragment>
                                        {
                                            errorMessage.code == "ERR_BAD_REQUEST" ?
                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <strong>{errorMessage.message}</strong> Contact Your Admin
                                                    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                                </div> :
                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <strong>{errorMessage.message}</strong>
                                                    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                                </div>
                                        }
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-secondary table-sm table-responsive-md table-hover table-striped text-center">
                                <thead className="table-dark text-dark text-uppercase">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Location</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ?
                                            <tr>
                                                <td colSpan="6"><img src={spinnerImg} className="w-25 d-block m-auto" alt="" /></td>
                                            </tr> :
                                            employees.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        employees.map(employee => {
                                                            return (
                                                                <tr key={employee.login.uuid}>
                                                                    <td>{employee.login.uuid.substring(employee.login.uuid.length - 4)}</td>
                                                                    <td><img src={employee.picture.large} className="rounded rounded-circle" width="30px" alt=""></img></td>
                                                                    <td><Link to={`/employees/${employee.login.uuid}`} className="text-primary"><i className="text-white bi bi-eye "></i> {employee.name.first} {employee.name.last}</Link></td>
                                                                    <td>{employee.gender}</td>
                                                                    <td>{employee.location.city}</td>
                                                                    <td>{employee.phone}</td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </React.Fragment> :
                                                <tr>
                                                    <td colSpan="6"><span className="text-danger">---No Data Found---</span></td>
                                                </tr>

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
}
export default Employees