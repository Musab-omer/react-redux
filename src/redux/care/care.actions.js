export const CARE_PRAND='CARE_PRAND';

export const selectPrand=(prand)=>{
    return{
        type:CARE_PRAND,
        payload:prand
    }
}