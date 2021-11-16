import React from 'react'
import Button from "../UI/Button";
import {useDispatch} from "react-redux";
import {removeContact} from "../../store/Contacts/actionsCreator";

const Item = ({item}) => {

    const dispatch = useDispatch()

    const removeItem = () => dispatch(removeContact(item.id))

    return (
        <div className="row">
            <div className="col-sm-8">
                <div className="card">
                    <h3 className="card-title">{item.name}</h3>
                    <div className="card-body">
                        <p className="card-text">email: {item.email}</p>
                    </div>
                </div>

            </div>
            <div className="col-sm-4">
                <Button
                    label="Remove"
                    className="btn btn-danger btn-sm"
                    type="button"
                    clickHandler={removeItem}
                />
            </div>


        </div>


    )
}

export default Item

