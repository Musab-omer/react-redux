import { BUY_PIZZA } from "./pizzahut.actionTypes";

let buyPizza = () => {
    //alert("from buyPizza action")
    return {
        type: BUY_PIZZA,
        payload: 'Purchase a pizza'
    }
};
export { buyPizza };