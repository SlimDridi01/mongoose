const express = require("express");
const ContactSchema = require("../Models/ContactSchema");
const Router = express.Router();
Router.post("/addContact", async (req, res) => {
  try {
    const addContact = new ContactSchema(req.body);
    await addContact.save();
    res.send({ msg: "contact added", addContact });
  } catch (error) {
    res.send("could not add");
  }
});

Router.get("/", async (req, res) => {
  try {
    const contacts = await ContactSchema.find();
    res.status(200).send({ msg: "list of contacts", contacts });
  } catch (error) {
    res.send("could not get contacts");
  }
});
Router.delete("/deleteContact/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await ContactSchema.findByIdAndDelete(id);
    res.send({ msg: "contact deleted", deleted });
  } catch (error) {
    res.send("could not delete this contact ");
  }
});
Router.put("/updateContact/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const update = await ContactSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.send({ msg: "contact is updated", update });
  } catch (error) {
    res.send("could not update");
  }
});
module.exports = Router;
