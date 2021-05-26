import React from "react";
import {useState, useEffect} from 'react';
import {TileList} from "../../components/tileList/TileList"
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  const {appointments, contacts, addAppointment} = props;
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  );
  const [time, setTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle("");
    setDate("");
    setContact("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          contact={contacts}
          setContact={setContact}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
