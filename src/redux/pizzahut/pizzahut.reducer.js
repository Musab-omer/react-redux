import { BUY_PIZZA } from "./pizzahut.actionTypes"

let initalState = {
    count: 30
}

let pizzahutReducer = (state = initalState, action) => {
    //alert("from reducer")
    switch (action.type) {
        case BUY_PIZZA:
            return {
                count: state.count - 1 > 0 ? state.count - 1 : 1
            };
            break;
        default:
            return state
    }
}
export { pizzahutReducer }