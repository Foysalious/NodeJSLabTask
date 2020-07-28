const express = require('express');
const router = express.Router();

const users = require('../data');


router.get('/', (req, res) => {
  res.render('login/index');
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;



  // Check validity
  users.forEach((user) => {

    if (user.username==username && user.password==password) {
      if (user.isAdmin) {
        return res.redirect('/admin');
      }
      else {
        return res.redirect ('/employee');
      }
    }
  });
});

module.exports = router;
