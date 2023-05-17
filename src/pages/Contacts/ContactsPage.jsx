import { getContactsThunk } from 'Redux/Contacts/thunks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Message, Title, TitleContact } from './ContactsPage.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Loader } from 'components/Loader/Loader';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      {isLoading && <Loader />}
      {error && <Message>{error}</Message>}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <Message>Sorry, no contacts yet...</Message>
      )}
    </Container>
  );
}
