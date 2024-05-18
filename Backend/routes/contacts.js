const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact.js')
const ContactController = require('../controllers/ContactController.js')

router.post("/create", ContactController.createContact)

router.get('/', ContactController.getAllContacts);

router.get('/id/:_id', ContactController.getContactById);

router.put('/id/:_id', ContactController.updateContact);

router.delete('/id/:_id', ContactController.deleteContact);

module.exports = router