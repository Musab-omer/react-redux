
export const employeeFeatureKey='employees';

let initialState=[
    {
        sno: "AAAA100",
        fName: "Musab",
        MName: 'Mohammed',
        lName: "Omer",
        age: 34,
        designation: "Software Engineer",
        address: "Cairo Egypt"
    },
    {
        sno: "AAAA102",
        fName: "Amna",
        MName: 'Abdallah',
        lName: "Ahmed",
        age: 24,
        designation: "Doctor",
        address: "Khartoum Sudan"
    },
    {
        sno: "AAAA103",
        fName: "Mohammed",
        MName: 'Jaly',
        lName: "Ali",
        age: 25,
        designation: "Seels Manager",
        address: "Dubai"
    }
]

export const reducer=(state=initialState,action)=>{
   return state
}