import React from "react";
import { useState, useEffect } from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList"

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName]= useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false)

  const {contacts, addContact} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
   if(!duplicateName){
     addContact(name, phone, email);
     setName("");
     setPhone("");
     setEmail("");
   }
  };

  /* Check for duplicates whenever the name in the form changes and indicate the name is a duplicate */
  useEffect (() =>{
    const nameIsDuplicate = () =>{
      const found = contacts.find((contact) => contact.name ===name);
      if(found!=undefined){
        return true;
      }else{
        return false;
      }
    };

    if(nameIsDuplicate()){
      setDuplicateName(true)
    }else{
      setDuplicateName(false)
    }

  }, [name, contacts, duplicateName])



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        {duplicateName ? "Name already exists" : ""}
        <ContactForm 
          name={name} 
          setName={setName} 
          phone={phone} 
          setPhone={setPhone} 
          email={email} 
          setEmail={setEmail} 
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
