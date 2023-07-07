import { GOOD_AFTERNOON, GOOD_EVENING, GREET, GREET_PERSON } from "./messageCard.actionTypes";

export const messageFeatureKey='messageCard'
let initialState = {
    message: 'Hello'
};

let messageCardReducer = (state = initialState, action) => {
    let{type,payload}=action
    switch (type) {
        case GREET:
            return {
                message: 'Good Morning'
            }
            break;
        case GOOD_AFTERNOON:
            return {
                message: 'Good Afternoon'
            }
            break;
        case GOOD_EVENING:
            return {
                message: 'Good Evening'
            }
            break;
        case GREET_PERSON:
            return {
                message: 'Hello Musaab who are you'
            }
            break;
        default:
            return state
    }
}
export { messageCardReducer }