import * as messageAction from './message.actions'

export const messageFeatureKey='message';

let initailState={
    messagePerson:{
        name:'',
        message:''
    }
}

export const reducer=(state=initailState,action)=>{
    let{type,payload}=action;
    switch (type) {
        case messageAction.SEND_MESSAGE:
            return{
                messagePerson:payload
            }
            break;
    
        default:return state
            break;
    }
}