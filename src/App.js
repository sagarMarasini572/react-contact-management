import { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from './components/ContactAdder';

import "./styles/app.css";


const App = () => {

  const getContact = JSON.parse(localStorage.getItem("contact"));

  const [contact, setContact]  = useState(getContact? getContact : []);

  const addContactData = (contactData) => {const allContacts = [contactData, ...contact];
  setContact(allContacts);
  localStorage.setItem("contact",JSON.stringify(allContacts)) };

  

  return (
    <>
    <div className="contact_adder">
      <ContactAdder onContactAdded={addContactData}/>
    </div>
      
      <div className="contact_list" >
        <h3>Contact List: </h3>

        {contact.map((data,) => <Contact key = {data.id} data={data}></Contact>)}
       

      </div>

    </>
  );
};

export default App;
