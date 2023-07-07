import React from "react";

let MainNavbar = () => {
    return (
        <React.Fragment>
            <div className="navbar navbar-expand-lg navbar-light bg-light shadow p-3">
                <a href="/" className="navbar-brand p-2 fw-bolder"> React Redux Event Binding</a>
                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MainNavbar