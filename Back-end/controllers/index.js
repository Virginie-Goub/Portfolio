const fs = require("fs");
const Contact = require("../models/Contact");

const index = {
  contact: function (req, res, next) {
    const nouveauContact = new Contact({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      message: req.body.message,
    });

    nouveauContact.save((err) => {
      if (err) {
        res.json({
          message: "erreur envoi formulaire",
        });
        return;
      }
    });
    res.json({
      message: "formulaire envoyé",
    });
  },
};

module.exports = index;
