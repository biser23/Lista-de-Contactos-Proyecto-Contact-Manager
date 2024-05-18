import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newContact = { nombreCompleto, telefono, email };
      await api.post('/create', newContact);
      setNombreCompleto('');
      setTelefono('');
      setEmail('');
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
        <h2 className="text-center my-4">Create Contact</h2>
        <form onSubmit={handleSubmit} className="needs-validation">
        <div className="mb-3">
            <label className="form-label">Nombre Completo</label>
            <input
            type="text"
            className="form-control"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
            type="text"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            />
        </div>
        <div>
            <label className="form-label">Email</label>
            <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <br/>
        <div className="d-flex justify-flex-start">
          <button type="button" className="btn btn-secondary" onClick={handleBack}>Atrás</button>
          &nbsp;
          <button type="submit" className="btn btn-primary">Crear Contacto</button>
        </div>
        </form>
    </div>
  );
};

export default ContactForm;
