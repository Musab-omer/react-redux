import * as hobbyRadioSelectorAction from './hobbyRadioSelector.action'

export const hobiesFeatureKey='hobiesSelected';

let initialState={
    Hobby:''
}
export const reducer=(state=initialState,action)=>{
    let{type,payload}=action
    switch (type) {
        case  hobbyRadioSelectorAction.EATING_CHECK:
            return{
                Hobby:payload
            }
            break;
            case  hobbyRadioSelectorAction.CODING_CHECK:
            return{
                Hobby:payload
            }
            break;
            case  hobbyRadioSelectorAction.SLEEPING_CHECK:
            return{
                Hobby:payload
            }
            break;
        default: return state
            break;
    }
}