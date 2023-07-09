export const EATING_CHECK='EATING_CHECK';
export const CODING_CHECK='CODING_CHECK';
export const SLEEPING_CHECK='SLEEPING_CHECK';


export const eatingCheck=(hobby)=>{
    return{
        type:EATING_CHECK,
        payload:hobby
    }
}
export const codingCheck=(hobby)=>{
    return{
        type:CODING_CHECK,
        payload:hobby
    }
}
export const sleepingCheck=(hobby)=>{
    return{
        type:SLEEPING_CHECK,
        payload:hobby
    }
}