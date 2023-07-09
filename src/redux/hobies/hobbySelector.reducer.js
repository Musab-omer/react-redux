import * as hobbySelectorAction from './hobbySelector.actions'

export const hobiesFeatureKey='hobiesSelected';

let initialState={
    hobies:{
        eating: false,
        coding: false,
        sleeping: false
    }
}
export const reducer=(state=initialState,action)=>{
    let{type,payload}=action
    switch (type) {
        case  hobbySelectorAction.EATING_CHECK:
            return{
                hobies:{
                    ...state.hobies,
                    eating:payload
                }
            }
            break;
            case  hobbySelectorAction.CODING_CHECK:
            return{
                hobies:{
                    ...state.hobies,
                    coding:payload
                }
            }
            break;
            case  hobbySelectorAction.SLEEPING_CHECK:
            return{
                hobies:{
                    ...state.hobies,
                    sleeping:payload
                }
            }
            break;
        default: return state
            break;
    }
}