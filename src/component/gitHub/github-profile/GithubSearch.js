import React, { useState } from "react"
import GithubProfileCard from "./GithubProfileCard"
import GithubProfileDetails from "./GithubProfileDetails"
import GithubRepos from "../github-repo/GithubRepos"
import { useDispatch, useSelector } from "react-redux"
import * as githubSearchAppAction from '../../../redux/gitHubApp/githubSearchApp.actions'
import { githubSearchAppFeatureKey } from '../../../redux/gitHubApp/githubSearchApp.reducer'
import spinnerImage from '../../../assets/DzUd.gif'

let GithubSearch = () => {

    let [user, setUser] = useState("")
    let updateUserInput = (event) => {
        setUser(event.target.value)
    }

    let gitHubInof = useSelector((state) => {
        return state[githubSearchAppFeatureKey]
    })
    let { loading, profile, repos, errorMessage } = gitHubInof
    let dispatch = useDispatch();

    let searchGithubUser = (event) => {
        event.preventDefault();
        dispatch(githubSearchAppAction.fetachGithubProfile(user));

        dispatch(githubSearchAppAction.fetachGithubRepos(user))
    }

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-success">Github Profile Search</h2>
                            <p className="lead">Pariatur labore exercitation magna officia ex qui velit. Incididunt sint incididunt magna minim consequat officia nulla et reprehenderit amet irure anim et eu. Aliquip consequat ea ad qui Lorem voluptate esse aliqua sint occaecat ipsum non proident. Laborum duis quis elit ea veniam. Dolor elit minim consequat voluptate nostrud.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form className="row mb-2" onSubmit={searchGithubUser}>
                                <div className="col-auto">
                                    <input type="text" className="form-control" required value={user} onChange={updateUserInput} placeholder="user profile name" />
                                </div>
                                <div className="col-auto">
                                    <input type="submit" className="btn btn-success" value="Search" />
                                </div>
                            </form>
                            {
                                errorMessage != "" ?

                                    <React.Fragment>
                                        {
                                             errorMessage.code=="ERR_BAD_REQUEST"?
                                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                <strong>{errorMessage.message}</strong> Github profile Not found please re enter correct name .
                                                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                            </div>:
                                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            <strong>{errorMessage.message}</strong>  
                                            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                        </div>
                                        }
                                    </React.Fragment> : null

                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    {
                        loading &&
                        <img src={spinnerImage} className="w-25 d-block m-auto" alt="" />
                    }
                    <div className="row">

                        <div className="col-md-4">
                            {
                                Object.keys(profile).length > 0 ?
                                    <GithubProfileCard /> : null
                            }
                        </div>
                        <div className="col-md-8">
                            {
                                Object.keys(profile).length > 0 ?
                                    <GithubProfileDetails /> : null
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                repos.length > 0 ?
                                    <GithubRepos /> : null
                            }
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ marginBottom: "300px" }}></div>
        </React.Fragment>
    )
}
export default GithubSearch