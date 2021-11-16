import React, {useState} from "react";
import Button from "../UI/Button"
import {useDispatch} from "react-redux";
import {addNewContact} from "../../store/Contacts/actionsCreator";

const Form = () => {

    const [contact, setContact] = useState({name: '', email: ''});
    const dispatch = useDispatch()

    const onChangeField = event => {
        setContact({...contact, [event.target.name]: event.target.value})
    }

    const onSubmitForm = event => {
        event.preventDefault()
        dispatch( addNewContact(contact))
        setContact({name: '', email: ''})
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text"
                className="form-control"
                       id="name"
                       name="name"
                       onChange={onChangeField}
                         value={contact.name}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text"
                       className="form-control"
                          id="email"
                          name="email"
                          onChange={onChangeField}
                          value={contact.email}
            />
            </div>

            <Button
                clickHandler={onSubmitForm}
                type="submit"
                className="btn btn-sm btn-primary"
                label="Add Contact"

            />
        </form>
    )
}

export default Form