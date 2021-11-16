import React from 'react'
import {useSelector} from "react-redux";
import Item from "./Item"

const List = () => {

    const list = useSelector(state => state.contacts.list)

    return !list.length ? (<h2>No contacts added</h2>) : (
        <div className="list-group">
            {list.map(item => <Item key={item.id} item={item}/>)}
        </div>
    )
}

export default List