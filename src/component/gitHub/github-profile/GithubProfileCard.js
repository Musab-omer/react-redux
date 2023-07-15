import React from "react"
import { useSelector } from "react-redux"
import {githubSearchAppFeatureKey} from '../../../redux/gitHubApp/githubSearchApp.reducer'

let GithubProfileCard=()=>{
    let{profile}=useSelector((state)=>{
        return state[githubSearchAppFeatureKey]
    })
    return(
        <React.Fragment>
            <div className="card shadow bg-secondary">
                <div className="card-body">
                    <img src={profile.avatar_url} className="card-img" alt="" />
                    <p className="card-title">{profile.name}</p>
                    <p className="card-text">{profile.bio}</p>
                    <a href={profile.html_url} target="_blank" className="btn btn-info btn-sm">profile</a>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GithubProfileCard