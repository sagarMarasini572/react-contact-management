import { useState } from "react";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";
import ContactAdder from "./components/ContactAdder";

import "./styles/app.css";

const App = () => {
  // Get JSON data that is saved on localstorage and parse to create array from string
  const getContact = JSON.parse(localStorage.getItem("contact"));

  // Create state for contacts
  const [contact, setContact] = useState(getContact ? getContact : []);

  // This function is called by the child. i.e. ContactAdder
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contact];
    setContact(allContacts);
    localStorage.setItem("contact", JSON.stringify(allContacts));
  };
  // Clear all contacts
  const clearAllContact = () => {
    localStorage.clear();
    setContact([]);
  };

  return (
    <>
      <NavBar />

      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list">
        <h3>Contact List: </h3>

        {contact.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearAllContact} style={{ background: "#cc0800" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;
