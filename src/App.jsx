import "modern-normalize";
import "./index.css";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredData = () => {
    return contacts.filter((user) =>
      user.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };

  const filteredContacts = getFilteredData();

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.tel,
    };
    setContacts((prev) => [...prev, newContact]);
    actions.resetForm();
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox searchStr={searchStr} onChangeSearch={setSearchStr} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
