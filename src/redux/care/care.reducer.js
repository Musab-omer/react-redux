import * as careAction from './care.actions'

export const carFeatureKey='care';

let initialState={
    prand:'select car'
}

export const reducer=(state=initialState,action)=>{
    let {type,payload}=action
    switch (type) {
        case careAction.CARE_PRAND:
            return{
                prand:payload
            }
            break;
    
        default: return state
            break;
    }
}