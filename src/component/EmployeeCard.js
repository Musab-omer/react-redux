import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as employeesReducer from '../redux/employees/employees.reducer'
let EmployeeCard = () => {

    //get data from redux store
    let employeesInfo=useSelector((state)=>{
        return state[employeesReducer.employeeFeatureKey]
    })
    return (
        <React.Fragment>
            <div className="container bg-info mt-3">
                <div className="row">
                    <div className="col">
                        {
                            employeesInfo.map(employee => {
                                return (
                                    <React.Fragment>
                                        <ul className="list-group bg-light mt-3">
                                            <li className="list-group-item">SNO :  {employee.sno}</li>
                                            <li className="list-group-item">first Name : {employee.fName}</li>
                                            <li className="list-group-item">Middle Name : {employee.MName}</li>
                                            <li className="list-group-item">Age : {employee.age}</li>
                                            <li className="list-group-item">designation : {employee.designation}</li>
                                            <li className="list-group-item">address : {employee.address}</li>
                                        </ul>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default EmployeeCard;