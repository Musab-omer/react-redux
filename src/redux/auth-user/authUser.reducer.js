import * as authUserAction from './authUser.actions';

export const authUserFeatureKey='authUser'

let initialStata={
    isLoggedIn:false
}

export const reducer=(stata=initialStata,action)=>{
    switch (action.type) {
        case authUserAction.LOG_IN:
            return{
                isLoggedIn:true
            }
            break;
            case authUserAction.LOG_OUT:
                return{
                    isLoggedIn:false
                }
        default: return stata
            break;
    }
}