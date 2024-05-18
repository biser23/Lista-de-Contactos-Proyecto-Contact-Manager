import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const ContactEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await api.get(`/id/${id}`);
                const contact = response.data;
                setNombreCompleto(contact.nombreCompleto);
                setTelefono(contact.telefono);
                setEmail(contact.email);
            } catch (err) {
                console.error(err);
            }
        };

            fetchContact();
        }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedContact = { nombreCompleto, telefono, email };
            await api.put(`/id/${id}`, updatedContact);
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
            <h2 className="text-center my-4">Edit Contact</h2>
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
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br/>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Atrás</button>
                    &nbsp;
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    );

};

export default ContactEdit;
