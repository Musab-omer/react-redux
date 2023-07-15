import React from "react";
import { githubSearchAppFeatureKey } from '../../../redux/gitHubApp/githubSearchApp.reducer'
import { useSelector } from "react-redux";

let GithubProfileDetails = () => {
    let { profile } = useSelector((state) => {
        return state[githubSearchAppFeatureKey]
    })
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-light">
                    <span className="badge badge-pill badge-info mx-2">{profile.followers} Followers</span>
                    <span className="badge badge-pill badge-success mx-2">{profile.public_repos} Repos</span>
                    <span className="badge badge-pill badge-danger mx-2">{profile.public_gists} Gists</span>
                    <span className="badge badge-pill badge-warning">{profile.following} Following</span>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-secondary text-white"><span className="fw-bold">User Name :</span> {profile.name}</li>
                        <li className="list-group-item"><span className="fw-bold">Location :</span> {profile.location}</li>
                        <li className="list-group-item"><span className="fw-bold">Email :</span> {profile.email}</li>
                        <li className="list-group-item"><span className="fw-bold">Compnay :</span> {profile.company}: </li>
                        <li className="list-group-item"><span className="fw-bold">Blog :</span> {profile.blog}</li>
                        <li className="list-group-item"><span className="fw-bold">Member Since :</span> {profile.created_at}</li>
                        <li className="list-group-item"><span className="fw-bold">Profile URL :</span> <a href={profile.html_url} target="_blank">{profile.url}</a> </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GithubProfileDetails