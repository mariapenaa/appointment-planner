import React from "react";

export const ContactPicker = (props) => {
  const {contacts, onChange, name} = props;
  return (
    <select  name="contacts" onChange={onChange}>
      <option value="default" selected="selected">No contacts selected</option>
      {contacts.map((contact, index)=>{
      return(
        <option value={`contact${index}`}>{contact.name}</option>
      )
      })} 
  
  </select>
  );
};
