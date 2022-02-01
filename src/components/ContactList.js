
import PropTypes from "prop-types"

import { useDeleteContactMutation } from '../redux/contactApi';
import { ElementContacts } from "./ElementContacts"

import style from './phonebook.module.css';


export const Contacts = ({ contacts }) => {
    const [deleteContact] = useDeleteContactMutation()
    return (
        <ul>
            {contacts.map(({ name, id, number }) => (<li className={style.list} key={id}><ElementContacts name={name} number={number} id={id} func={ deleteContact }/></li>) )}
        </ul>
    )
}


Contacts.prototype={
    contacts: PropTypes.arrayOf(
PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
)

    ),


}


