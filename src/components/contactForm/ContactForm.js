import React from "react";

export const ContactForm = (props) => {
  const {handleSubmit, name, phone, email,setName, setPhone, setEmail} = props

  return (
    <form onSubmit={handleSubmit}>
      <input  
        value={name} 
        type="text" 
        name="name" 
        placeholder="Name" 
        onChange={(e)=>setName(e.target.value)}/>

      <input  
        value={email} 
        type="email" 
        name="email" p
        laceholder="Email" 
        onChange={(e)=>setEmail(e.target.value)}/>

      <input 
        value={phone} 
        type="tel" 
        name="phone" 
        placeholder="Phone" 
        /* pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" */
        onChange={(e)=>setPhone(e.target.value)}/>

      <button type="submit" value="Add Contact"/>
    </form>
  );
};
