import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selector';
import {
  Phonebook,
  PhonebookTitle,
  PhonebookForm,
  PhonebookLable,
  PhonebookInput,
  PhonebookButton,
} from './ContactForm.styled';

const notify = (message) => toast(message);

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({ addName: '', addNumber: '' });
  const { addName, addNumber } = newContact;

  const inputHandle = e => {
    const { name, value } = e.currentTarget;
    setNewContact(prev => ({ ...prev, [name]: value }));
  };

  const formSubmit = e => {
    e.preventDefault();
    const contact = {
      name: addName,
      number: addNumber,
    };
    const newName = contact.name.toLowerCase();
    if (contacts.filter(elem => elem.name.toLowerCase() === newName).length) {
      notify(`${newName} is alredy in contacts`);
      return;
    }
    dispatch(addContact(contact));
    setNewContact({ addName: '', addNumber: '' });
  };

  return (
    <Phonebook>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <PhonebookForm onSubmit={formSubmit}>
        <PhonebookLable>
          Name
          <PhonebookInput
            type="text"
            name="addName"
            placeholder="Name  Surname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={addName}
            onChange={inputHandle}
          />
        </PhonebookLable>
        <PhonebookLable>
          Phone
          <PhonebookInput
            type="tel"
            name="addNumber"
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={addNumber}
            onChange={inputHandle}
          />
        </PhonebookLable>
        <PhonebookButton type="submit">Add contact</PhonebookButton>
      </PhonebookForm>
      <Toaster/>
    </Phonebook>
  );
};
