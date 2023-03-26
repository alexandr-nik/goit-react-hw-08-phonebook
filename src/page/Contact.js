
import { AppBlock } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { ContactsFilter } from 'components/ContactsFilter';
import { Section } from 'components/Section';

export const Contact = () => {
  return (
    <AppBlock>
      <ContactForm />
      <Section title="Contacts">
        <ContactsFilter />
        <Contacts />
      </Section>
    </AppBlock>
  );
};