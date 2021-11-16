
import {ADD_CONTACT, REMOVE_CONTACT} from "./actions";

export const addNewContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: {...contact, id: Date.now(), published:true},
    }
}

export const removeContact = contactId => {
    return {
        type: REMOVE_CONTACT,
        payload: contactId

    }
}
