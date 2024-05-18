import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get('http://localhost:5000/api/contacts');
      setContacts(res.data);
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <Link to="/create">Add New Contact</Link>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>
            <Link to={`/contacts/${contact._id}`}>{contact.fullName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
