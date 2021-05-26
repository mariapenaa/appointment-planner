import React from "react";
import {useState} from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /* Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts */

  const addContact = (name, number, email) =>{
    const newContact = {
      name:name,
      number:number,
      email:email,
    }
    setContact([...contact,newContact])
  }

  /* Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments */

  const addAppointment = (title, contact, date, time) =>{
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    }
    setAppointment([...appointment, newAppointment])
  }

  /* Pass the array of contacts and the appropriate callback function as props to the ContactsPage component */
  /* Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component */



  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contact} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointment} contacts={contact} addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
