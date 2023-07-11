import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactAppFeatureKey } from '../../redux/contactApp/contactApp.reducer'
import * as contactAppActions from '../../redux/contactApp/contactApp.actions'
import spinnerImage from '../../assets/DzUd.gif'


let ContactsList = () => {
    //get contacts data from redux store
    let contactsInfo = useSelector((state) => {
        return state[contactAppFeatureKey]
    })
    let { loading, contacts, errorMessage } = contactsInfo

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(contactAppActions.fetchContacts())
    }, [])

    let getSelectedContact = (contact) => {
        dispatch(contactAppActions.selectedContact(contact))
    }
    return (
        <React.Fragment>
            <table className='table table-hover table-striped table-warning table-sm text-center'>
                <thead id="contactsAppList" className='table-dark fw-bolder'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">gender</th>
                        <th scope="col">city</th>
                        <th scope="col">email</th>
                        <th scope="col">age</th>
                        <th scope="col">phone</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        loading ? <tr><td colSpan="8" className="text-center"><img className="w-25" src={spinnerImage} alt="" /></td></tr> :
                            contacts.length > 0 ?
                                contacts.map(contact => {
                                    return (
                                        <tr key={contact.login.uuid} onClick={getSelectedContact.bind(this, contact)} style={{cursor:"pointer"}}>
                                            <td>{contact.login.uuid.substring(contact.login.uuid.length - 4)}</td>
                                            <td><img src={contact.picture.medium} height="30px" alt="" /></td>
                                            <td>{contact.name.first}</td>
                                            <td>{contact.gender}</td>
                                            <td>{contact.location.city}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.dob.age}</td>
                                            <td>{contact.phone}</td>
                                        </tr>
                                    );
                                }) : <tr><td colSpan="8">---No data avilable---</td></tr>
                    }

                </tbody>
            </table>
        </React.Fragment>
    )
}
export default ContactsList