import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactEdit from './components/ContactEdit';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-4">Contact Manager</h1>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create" element={<ContactForm />} />
          <Route path="/edit/:id" element={<ContactEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
