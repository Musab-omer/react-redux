import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authUserReducer from '../redux/auth-user/authUser.reducer'
import * as authUserAction from '../redux/auth-user/authUser.actions'


let AuthUser = () => {
    //get stata form redux store 
    let loggedinfo=useSelector((stata)=>{
        return stata[authUserReducer.authUserFeatureKey]
    })
    
    let dispatch=useDispatch()
    
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">

                                {
                                    loggedinfo.isLoggedIn ?
                                        <button className="btn btn-warning" onClick={()=>dispatch(authUserAction.logOut())}>LogOut</button> :
                                        <button className="btn btn-success" onClick={()=>dispatch(authUserAction.logIn())}>LogIn</button>
                                }

                                {
                                    loggedinfo.isLoggedIn ?
                                        <p className="h3">Hello! Welcome User</p>
                                        :
                                        <p className="h3">Welcome Guest </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default AuthUser;