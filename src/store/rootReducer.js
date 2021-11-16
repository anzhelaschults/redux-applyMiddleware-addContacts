import {combineReducers} from "redux";
import {reducer as DealReducer} from "./Deals/reducer";
import {PostReducer} from "./Posts/postReducer";
import {ContactReducer} from "./Contacts/contactReducer";

// https://redux.js.org/api/combinereducers

export const RootReducer = combineReducers({
    deals: DealReducer,
    posts: PostReducer,
    contacts: ContactReducer
})