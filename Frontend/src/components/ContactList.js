import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get('/');
        if (Array.isArray(response.data)) {
          setContacts(response.data);
        } else {
          console.error("Unexpected response data:", response.data);
          setContacts([]);
        }
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setContacts([]); 
      }
    };

    fetchContacts();
  }, []);


  const handleDelete = async (id) => {
    try {
      await api.delete(`/id/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Contact List</h2>
      <Link to="/create" className="btn btn-primary mb-3">Create Contact</Link>
      <ul className="list-group">
        {contacts.map(contact => (
          <li key={contact._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {contact.nombreCompleto} - {contact.telefono} - {contact.email}
            </span>
            <div>
              <Link to={`/edit/${contact._id}`} className="btn btn-secondary btn-sm mr-2">Edit</Link>
              &nbsp;
              <button onClick={() => handleDelete(contact._id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
