import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact contact={contact} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
