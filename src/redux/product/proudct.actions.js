export const DECRESE_QTY = 'DECRESE_QTY';
export const INCREASE_QTY = 'INCREASE_QTY';

export let decreseQty = () => {
    return {
        type: DECRESE_QTY,
        payload: ''
    }
}

export let increaseQty = () => {
    return {
        type: INCREASE_QTY,
        payload: ''
    }
}