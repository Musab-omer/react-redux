import React, { useEffect, useState } from "react";

let UserRegistration = () => {

    let [User, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        confPassword: '',
        designation: '',
        termsConditions: false
    });

    let updateInput = (event) => {
        switch (event.target.type) {
            case 'checkbox':
                setUser({
                    ...User,
                    [event.target.name]: event.target.checked
                });
                break;
            default:
                setUser({
                    ...User,
                    [event.target.name]: event.target.value
                })
        }
    }

    let registerUser=(e)=>{
        e.preventDefault();
        console.log(User);
    }

    
    return (
        <React.Fragment>
            <div className="container mt-3">
                {/* <pre>{JSON.stringify(User)}</pre> */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Register Form</p>
                            </div>
                            <div className="card-body bg-secondary">
                                <form onSubmit={registerUser}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control"
                                            name="userName"
                                            value={User.name}
                                            onChange={updateInput}
                                            placeholder="User Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control"
                                            name="email"
                                            value={User.email}
                                            onChange={updateInput}
                                            placeholder="Email" />
                                            <div id="emailHelp" className="form-text text-white">We'll never share you email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control"
                                            name="password"
                                            value={User.password}
                                            onChange={updateInput}
                                            placeholder="Password" />
                                            <div id="paswordHelBlock" className="form-text text-white">
                                                Your Password must be 8-20 characters long, contain letters and numbers, and must not contain 
                                                spaces, special characters, or emoji.
                                            </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control"
                                            name="confPassword"
                                            value={User.confPassword}
                                            onChange={updateInput}
                                            placeholder="Confirm Password" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select"
                                            name="designation"
                                            value={User.designation}
                                            onChange={updateInput}>
                                            <option value="">Select Designation</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                            <option value="Team Leader">Team Leader</option>
                                            <option value="Project Manager">Project Manager</option>
                                            <option value="Director">Director</option>
                                        </select>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input type="checkbox" id="terms"
                                            name="termsConditions"
                                           
                                            onClick={updateInput}
                                            className="form-check-input" />
                                        <label for="terms" className="form-check-label">Accept Terms & Conditions</label>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit"
                                            className="btn btn-primary" value="Register" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{marginBottom:"500px"}}></div>
        </React.Fragment>
    );
}
export default UserRegistration;