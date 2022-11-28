import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "umut",
      phone_number: "123123",
    },
    {
      fullname: "ibo",
      phone_number: "313131",
    },
    {
      fullname: "mahmıt",
      phone_number: "696969",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts App</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
