import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {userListSimpleFeatureKey} from '../redux/usersSimple/userListSimple.reducer'
import * as usersListSimpleActions from '../redux/usersSimple/userListSimple.actions'
import spinnerImage from '../assets/DzUd.gif'
let UserListSimple=()=>{

    let usersListSimpleInfo=useSelector((state)=>{
        return state[userListSimpleFeatureKey]
    })
    let {loading,users,errorMessage}=usersListSimpleInfo

    let dispatch=useDispatch();

    let clickGetUserListSimple=()=>{
        dispatch(usersListSimpleActions.fetchUsersList())
    }
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="text-primary">User List Simple</h2>
                                <p className="text-lead">Fugiat consectetur et magna sint ea laborum do incididunt ea ad ut deserunt. Ex voluptate nulla cupidatat elit ullamco magna proident. Officia labore culpa commodo officia ut do sint tempor laboris.</p>
                                <button type="button" className="btn btn-primary btn-sm" onClick={clickGetUserListSimple}>Get Users</button>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {
                                    errorMessage != "" &&
                                    <div class="alert alert-danger" role="alert">
                                        {errorMessage.message}
                                    </div>
                                }
                                <table className='table table-hover table-striped table-primary text-cneter'>
                                    <thead className='table-dark fw-bold text-uppercase'>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Emaile</th>
                                            <th>Street</th>
                                            <th>City</th>
                                            <th>Website</th>
                                            <th>Company</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loading &&
                                            <tr>
                                                <td colSpan="7"><img src={spinnerImage} className="w-25 d-block m-auto" alt="" /></td>
                                            </tr>
                                        }
                                        {
                                            users.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        users.map(user => {
                                                            return (
                                                                <tr key={user.id}>
                                                                    <td>{user.id}</td>
                                                                    <td>{user.name}</td>
                                                                    <td><i className='fa fa-envelope text-danger' /> {user.email}</td>
                                                                    <td>{user.address.street}</td>
                                                                    <td>{user.address.city}</td>
                                                                    <td><a href=""><i className='fa fa-globe' /> {user.website}</a></td>
                                                                    <td>{user.company.name}</td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </React.Fragment> :
                                                null
                                        }
                                    </tbody>
                                </table>
    
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
}
export default UserListSimple;