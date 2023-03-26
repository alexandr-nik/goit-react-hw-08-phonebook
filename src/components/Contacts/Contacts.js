import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/contacts/selector';
import { Spinner } from 'components/Spinner/Spinner';
import {
  ContactsBlock,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsButton,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const findFilterContact = () => {
    const filterName = filter.trim().toLowerCase();
    return contacts.filter(elem => {
      return elem.name.toLowerCase().includes(filterName);
    });
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsBlock>
      <ContactsList>
        {isLoading && <Spinner />}
        {error && <p style={{ textAlign: 'center' }}>{error}</p>}
        {contacts.length > 0 &&
          findFilterContact().map(item => {
            return (
              <ContactsItem key={item.id}>
                <ContactsText>{item.name}</ContactsText>
                <ContactsText>{item.number}</ContactsText>
                <ContactsButton
                  type="button"
                  value={item.id}
                  onClick={() => dispatch(deleteContact(item.id))}
                >
                  delete
                </ContactsButton>
              </ContactsItem>
            );
          })}
      </ContactsList>
    </ContactsBlock>
  );
};
