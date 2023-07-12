import React from 'react'
import { githubSearchAppFeatureKey } from '../../../redux/gitHubApp/githubSearchApp.reducer'
import { useSelector } from 'react-redux'

let GithubRepos = () => {
    let { repos } = useSelector((state) => {
        return state[githubSearchAppFeatureKey]
    })
    return (
        <React.Fragment>

            <div className="card shadow mt-3">
                <div className="card-header bg-secondary text-white">
                    <p className="h4">Repositories</p>
                </div>
                <div className="card-body">
                    {
                        repos.map(repo => {
                            return (
                                <React.Fragment>
                                    <li key={repo.id} className="list-group-item">
                                        <span className="h5 mx-1">
                                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                                        </span>
                                        <span className="badge badge-success mx-1">{repo.stargazers_count}Stars</span>
                                        <span className="badge badge-danger mx-1">{repo.watchers} Watchers</span>
                                    </li>
                                </React.Fragment>
                            );
                        })
                    }
                </div>

            </div>
        </React.Fragment>
    )
}
export default GithubRepos