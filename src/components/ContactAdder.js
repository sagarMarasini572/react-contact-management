import { useState } from "react";

const ContactAdder = (props) => {

  const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [location, setLocation] = useState("");


    const onClickHandler = () => {
      const contactData = {id: Math.randon(), name, number:mobile, location,};
      props.onContactAdded(contactData);
    }

    
    return (
    <>
    <div className="simpleAdder">
      <h3>Contact Adder:</h3>
      <br/>
      <input type="text" value={name} placeholder="Contact name" onChange={(e) => setName(e.target.value)}></input>
      <input type="text" value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value)}></input>
      <input type="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)}></input>
      <br/>
      <br/>
      <button onClick={onClickHandler}>Add Contact</button>
      </div>     
    </>
    
  );
};

export default ContactAdder;