const Contact = require('../models/Contact.js');

const ContactController = {
    async getAllContacts(req,res) {
        try {
            const contacts = await Contact.find();
            res.json(contacts);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "There was a problem trying to find contacts" });
        }
    },

    async getContactById(req,res) {
        try {
            const contact = await Contact.findById(req.params._id)
            res.status(201).json(contact);
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "There was a problem with the contact with _id number: " +
                    req.params._id,
            });
        }
    },

    async createContact(req,res) {
        try {
            const contact = await Contact.create({...req.body, completed: false});
            res.status(201).send({ message: "Contact successfully created", contact });
    
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "There was a problem trying to create a contact" });
        }
    },

    async updateContact(req,res){
        try {
            const contact = await Contact.findByIdAndUpdate(
              req.params._id,
              { $set: req.body },
              { new: true, runValidators: true }
            );
            if (contact) {
              res.send({ message: "Contact successfully updated", contact });
          } else {
              res.status(404).send({ message: "Contact not found" });
          }
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "There was a problem trying to update the contact with _id: " +
                    req.params._id,
            });
        }
    },

    async deleteContact(req,res) {
        try {
            const id = req.params._id;
            const contact = await Contact.findByIdAndDelete(id);
            res.send({ message: "contact deleted", contact });
        } catch (error) {
            console.log(error);
            res
            .status(500)
            .send({ message: "There was a problem trying to delete a contact" });
        }
    }
}

module.exports = ContactController;

