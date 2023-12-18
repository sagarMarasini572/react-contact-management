import { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from './components/ContactAdder';

import "./styles/app.css";


const App = () => {

  

  const [contact, setContact]  = useState([]);

  
  ;

  const addContactData = (contactData) => {setContact([...contact, contactData]);};

  return (
    <>
    <div className="contact_adder">
      <ContactAdder onContactAdded={addContactData}/>
    </div>
      
      <div className="contact_list" >
        <h3>Contact List: </h3>

        {contact.map(data => <Contact data={data}></Contact>)}
        
       <button>Save Data</button>
       <button>Get Data</button>

      </div>

    </>
  );
};

export default App;
