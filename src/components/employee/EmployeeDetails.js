import React from "react";
import { useParams } from "react-router-dom";
import { employeeFeatureKey } from '../../redux/employee/employee.reducer'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

let Employee =()=>{
    let {id}=useParams();
    let employeesInfo = useSelector((state) => {
        return state[employeeFeatureKey]
    })

    // let { loading, employees } = employeesInfo
    let employee=employeesInfo.employees.find(emp=>emp.login.uuid==id)
    return(
        <React.Fragment>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    {
                        Object.keys(employee).length > 0 ?
                            <React.Fragment>
                                <div className="card">
                                    <div className="card-header bg-warning text-center text-uppercase">
                                        <p className="h4">{employee.name.first}</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <img src={employee.picture.large} className="img-fluid  img-thumbnail w-75" alt="" />
                                                <p className="card-text mt-2">Do irure anim qui occaecat non laboris sint eiusmod non cillum.</p>
                                                <Link to="/employees/list" className="btn btn-dark btn-sm"><i className="bi bi-arrow-left-circle"></i> Back</Link>
                                            </div>
                                            <div className="col-md-5">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item card-title"><span className="fw-bold">Full Name :</span>  {employee.name.title}. {employee.name.first} {employee.name.last}</li>
                                                    <li className="list-group-item"><span className="fw-bold">Age :</span>  {employee.dob.age}</li>
                                                    <li className="list-group-item"><span className="fw-bold">City :</span> {employee.location.city}</li>
                                                    <li className="list-group-item"><span className="fw-bold">Country :</span> {employee.location.country}</li>
                                                    <li className="list-group-item"><span className="fw-bold">Member Since :</span> {employee.registered.date}</li>
                                                    <li className="list-group-item"><span className="fw-bold">Email :</span> {employee.email}</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27685.318791534304!2d31.326207999999998!3d29.845094399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1685837955687!5m2!1sen!2seg" className="border-0 img-fluid w-100 h-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment> : null
                    }
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}
export default Employee