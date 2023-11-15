import { Component } from "react"
import { nanoid } from "nanoid"
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { MainWrapper } from "components/App.styled";









export class App  extends Component  {
  state= {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
const contacts = JSON.parse(localStorage.getItem('contacts')) ;
console.log(contacts);
if(contacts) {
  this.setState({
    contacts,
  })
}


  }

  componentDidUpdate(prevProps, prevState) {
if(this.state.contacts !== prevState.contacts) {

  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
  }

addContact = (name,number) => {
  let contactData = {
    name,
    number,
    id: nanoid()
      }

      if(this.state.contacts.some(el => el.name.toLowerCase() === contactData.name.toLowerCase())) {
      return  alert(`${name} is already in contacts`)
      }
  
  this.setState(prevState =>({
    contacts: [...prevState.contacts, contactData]
    
  })
  
  )

}

createFilter = (e) => {
  const {value} = e.currentTarget;
this.setState({
  filter: value,
})
}

filterByName = () => {
const {filter, contacts} = this.state;
const normalized = filter.toLowerCase();
return contacts.filter(({name}) => name.toLocaleLowerCase().includes(normalized));
}


deleteContact = (contactId) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(el => 
      el.id !== contactId)
  }))
}




  render() {
    const {filter} = this.state
const filteredContacts = this.filterByName();



    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
<MainWrapper>
<ContactForm 
addContact={this.addContact}
/>
<Filter 
value={filter}
onChange={this.createFilter}
/>
<ContactList contacts={filteredContacts}
onDelete={this.deleteContact}
/>
</MainWrapper>
      </div>
      
    )}

};
