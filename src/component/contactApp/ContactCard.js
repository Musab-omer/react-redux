import React from "react";
import { useSelector } from "react-redux";
import { contactAppFeatureKey } from '../../redux/contactApp/contactApp.reducer'

let ContactCard = () => {
    let contact = useSelector((state) => {
        return state[contactAppFeatureKey].selectedContact
    })
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card shadow'>
                            <div className='cardd-header bg-secondary text-center'>
                                <img src={contact.picture.medium} className='img-fluid' style={{ border: "5px solid purple", borderRadius: "50%", width: "150px", height: "150px", marginBottom: "-50px" }} alt='' />
                            </div>
                            <div className='card-body mt-5'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item list-group-item-warning'>Name : {contact.name.first} {contact.name.last}</li>
                                    <li className='list-group-item list-group-item-warning'>Gender : {contact.gender}</li>
                                    <li className='list-group-item list-group-item-warning'>City : {contact.location.city}</li>
                                    <li className='list-group-item list-group-item-warning'>Email : {contact.email}</li>
                                    <li className='list-group-item list-group-item-warning'>Age : {contact.dob.age}</li>
                                    <li className='list-group-item list-group-item-warning'>Phone : {contact.phone}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContactCard