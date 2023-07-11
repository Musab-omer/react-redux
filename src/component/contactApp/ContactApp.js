import React from "react";
import ContactsList from "./ContactsList";
import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";
import { contactAppFeatureKey } from '../../redux/contactApp/contactApp.reducer'

let ContactApp = () => {
    let contactInfo = useSelector((state) => {
        return state[contactAppFeatureKey]
    })
    let { selectedContact, errorMessage } = contactInfo

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-primary">Contact App</h2>
                            <p className="lead">Culpa veniam ea aliqua ipsum. Adipisicing ex culpa magna pariatur laboris labore adipisicing nostrud sit ut nulla minim proident. Nisi Lorem eiusmod quis pariatur consequat eu pariatur. Proident magna tempor id dolore elit proident. Exercitation officia amet enim enim cillum sunt ad aliqua ex proident magna quis ex dolor. Velit occaecat fugiat et aute nostrud labore nulla. Pariatur ullamco Lorem nostrud sit proident exercitation minim consequat anim eiusmod in ut.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                errorMessage != "" &&
                                <React.Fragment>
                                    <div class="alert alert-danger" role="alert">
                                        {errorMessage.message}
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ContactsList />
                        </div>
                        <div className="col-md-4">
                            {
                                Object.keys(selectedContact).length > 0 &&
                                <ContactCard />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ContactApp