import Axios from "axios"
import {CLIENT_ID,CLIENT_SECRET} from './credentials/GithubCredentialse'
export const FETCH_GITHUB_PROFILE_REQUEST = 'FETCH_GITHUB_PROFILE_REQUEST'
export const FETCH_GITHUB_PROFILE_SUCCESS = 'FETCH_GITHUB_PROFILE_SUCCESS'
export const FETCH_GITHUB_PROFILE_FIALUR = 'FETCH_GITHUB_PROFILE_FIALUR'

export const FETCH_GITHUB_REPOS_REQUEST = 'FETCH_GITHUB_REPOS_REQUEST'
export const FETCH_GITHUB_REPOS_SUCCESS = 'FETCH_GITHUB_REPOS_SUCCESS'
export const FETCH_GITHUB_REPOS_FIALUR = 'FETCH_GITHUB_REPOS_FIALUR'


export const fetachGithubProfile = (profileUserName) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_GITHUB_PROFILE_REQUEST })
        try {
            let profileUrl = `https://api.github.com/users/${profileUserName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            let response = await Axios.get(profileUrl)
            dispatch({ type: FETCH_GITHUB_PROFILE_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_GITHUB_PROFILE_FIALUR, payload: error })
        }
    }
}

export const fetachGithubRepos=(profileUserName)=>{
    return async(dispatch)=>{
        dispatch({type:FETCH_GITHUB_REPOS_REQUEST})
        try {
            let reposUrl=`https://api.github.com/users/${profileUserName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            let response= await Axios.get(reposUrl)
            dispatch({type:FETCH_GITHUB_REPOS_SUCCESS,payload:response.data})
        } catch (error) {
            dispatch({type:FETCH_GITHUB_REPOS_FIALUR,payload:error})
        }
    }
}