import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  console.log(contact)

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={title} type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
      <input name="date" value={date} type="date" min={getTodayString()} placeholder="Date" onChange={(e)=>setDate(e.target.value)}/>
      <input name="time" value={time} type="text" placeholder="Time" onChange={(e)=>setTime(e.target.value)}/>
      <ContactPicker contacts={contact} onChange={(e)=>setContact(e.target.value)}/>
      <input type="submit" />
    </form>
  );
};
