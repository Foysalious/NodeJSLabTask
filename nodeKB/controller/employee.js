var express = require('express');
var router = express.Router();
var users = require('../data');
var loggedUser = require('../user');

router.get('/', (req, res) => {
  res.render('employee/index');
});


router.get('/MyProfile', function(req, res){
	res.send('Hello World');
});

router.get('/UpdateProfile', function(req, res){
	res.render('employee/updateProfile');
});



module.exports = router;
