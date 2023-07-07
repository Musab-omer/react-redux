import { GOOD_AFTERNOON, GOOD_EVENING, GREET, GREET_PERSON } from "./messageCard.actionTypes"

let greet=()=>{
    return{
        type:GREET,
        payload:'say good morning'
    }
}

let goodAfternoon=()=>{
    return{
        type:GOOD_AFTERNOON,
        payload:'say good afternoon'
    }
}

let goodEvening=()=>{
    return{
        type:GOOD_EVENING,
        payload:'say good evening'
    }
}

let greetPerson=()=>{
    return{
        type:GREET_PERSON,
        payload:'say Hello to a person name'
    }
}

export {greet,goodAfternoon,goodEvening,greetPerson}