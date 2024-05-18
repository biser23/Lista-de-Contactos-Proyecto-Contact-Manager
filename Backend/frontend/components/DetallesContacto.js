import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchContact = async () => {
      const res = await axios.get(`http://localhost:5000/api/contacts/${id}`);
      setContact(res.data);
    };
    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    history.push('/');
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/api/contacts/${id}`, contact);
    history.push('/');
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h1>Contact Details</h1>
      <input
        type="text"
        value={contact.fullName}
        onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
        />
        <button onClick={handleUpdate}>Actualizar</button>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

