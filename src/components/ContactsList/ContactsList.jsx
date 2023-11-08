import React from "react";
import { Contact } from "../Contact/Contact";
import { ContactList1 } from "./ContactList.styled";
import { Title } from "utils/utils";


export const ContactList =({contacts, onDelete}) => {
    return (
        <div>
            <Title>Contacts</Title>
            <ContactList1 key={contacts.id}>
        {contacts.map(el => (
         <Contact data={el}
onDelete={onDelete}

         />
))}
        </ContactList1>
        </div>

        
    )
}