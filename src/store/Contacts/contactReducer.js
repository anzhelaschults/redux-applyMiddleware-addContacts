import {ADD_CONTACT, REMOVE_CONTACT} from "./actions";

const initialState = {
    list: []
}

export const ContactReducer =(state = initialState, {type, payload}) => {
    switch(type) {

        case ADD_CONTACT:
            return {...state, list: [...state.list, payload]}

        case REMOVE_CONTACT:
            return {...state, list: state.list.filter(p => p.id !== payload)}

        default:
            return state

    }
}