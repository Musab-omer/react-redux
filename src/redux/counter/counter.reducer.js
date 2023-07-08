import * as counterAction from './counter.actions'

export const counterFeatureKey='counterNumber'
const initialState={
    counter:0
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case counterAction.INCREMENT:
            return{
                counter:state.counter+1
            }
            break;
            case counterAction.DECREMENT:
                return{
                    counter:(state.counter-1)<0?0:state.counter-1
                }
                break;
                default: return state
    }
}