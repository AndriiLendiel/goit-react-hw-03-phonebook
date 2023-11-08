import React, { Component } from "react";
import { Title } from "utils/utils";
import {FormWrapper,MainForm,FormLabel,FormInput, FormButton, ErrorText} from "./ContactForm.styled";

import { Formik, ErrorMessage} from "formik";
import * as yup from 'yup';


const contactSchema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'не правильно введено дані').required('це поле обов`язкове'),
  number: yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "не правильно введено дані").required('це поле обов`язкове')
})

const ErrorField = ({name}) => {
  return(
    <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
    >

    </ErrorMessage>
  )
}


class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    }


handleSubmit = (values, {resetForm})=> {
const {name, number} =values;
this.setState({
  name,
  number
})
this.props.addContact(name,number)
resetForm()
}

    render() {

        return (
          <FormWrapper>
                      <Title>PhoneBook</Title>
            <Formik
            initialValues={this.state}
            onSubmit={this.handleSubmit}
            validationSchema={contactSchema}
            >
            <MainForm  
            >
            <FormLabel> Name 
            <FormInput

        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required

      />
<ErrorField name="name"/>
</FormLabel>

      <FormLabel>Tel 
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
<ErrorField name="number"/>
      
      
      </FormLabel>
      <FormButton type="submit"
      >Add contact</FormButton>

      </MainForm>
            </Formik>

          </FormWrapper>

        )
    }
}

export default ContactForm;