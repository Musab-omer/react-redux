import React from "react";
import { Link } from 'react-router-dom'
let MainNavbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
                <div class="container-fluid">
                    <Link className="navbar-brand" href="#">React Redux BigBaskit-App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                        </ul>
                    </div>
                    </div>
            </nav>
        </React.Fragment>
    );
}
export default MainNavbar