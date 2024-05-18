const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    nombreCompleto:{type: String, required: true},
    telefono:{type: String, required: true},
    email:{type: String, required: true},
}, { timestamps: true });

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;