import React  from "react";
import {ContactItem, ContactButton } from "./Contact.styled";


export const Contact = ({data : {id,number, name}, onDelete}) => {
    return (
        <ContactItem key={id}>
{name} tel: {number}
<ContactButton onClick={() => onDelete(id)}>Delete</ContactButton>
        </ContactItem>
    )
}

