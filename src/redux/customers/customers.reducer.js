import {customerData} from '../../DataSource/customerStore'
export const customersFeatureKey='customers'

let initialStata={
    customers:customerData
}
export const reducer =(state=initialStata)=>{
    return state;
}