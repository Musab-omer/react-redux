import * as registerAction from './register.actions';

export const registerFeatureKey='register';

let initialSate={
    user:{
        userName: '',
        email: '',
        password: '',
        confPassword: '',
        designation: '',
        termsConditions: false
    }
}

export const reducer=(state=initialSate,action)=>{
    let{type,payload}=action;
    switch (type) {
        case registerAction.REGISTER_USER:
            return{
                user:payload
            }
            break;
    
        default:return state
            break;
    }
}