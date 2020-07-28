var express = require('express');
var router = express.Router();
let users = require('../data');


router.get('/', (req, res) => {
  res.render('admin/index');
});

router.get('/AddEmployee', function(req, res){
	res.render('admin/addEmployee');
});

// Add Employee POST
router.post('/AddEmployee', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var phone = req.body.phone;
  var gender = req.body.gender;
  var address = req.body.address;
  var designation = req.body.designation;



  var newUser = {
    id: Math.random().toString(36).substr(2, 9),
    username,
    userData: {
      phone,
      gender,
      address,
      designation,
    },
  };

  users.push(newUser);

  res.render('admin/allEmployee', { users });

  // res.render('admin/addEmployee');
});

// All Employee list GET
router.get('/AllEmployeeList', (req, res) => {
  res.render('admin/allEmployee', { users });
});

// Update Employee GET
router.get('/update/:id', (req, res) => {
  console.log(req.params.id);
  var user = users.find((user) => user.id === req.params.id);
  res.render('admin/editEmployee', { user });
});

// Update Employee POST
router.post('/update/:id', (req, res) => {
  var username = req.body.username;
  var phone = req.body.phone;
  var gender = req.body.gender;
  var address = req.body.address;
  var designation = req.body.designation;
  if (!username || !phone || !gender || !address || !designation) {
    return res.send('All fields are required');
  }
  var updatedUser = {
    username,
    userData: {
      phone,
      gender,
      address,
      designation,
    },
  };

  let newUsers = [...users];
  newUsers.forEach((user) => {
    if (user.id === req.params.id) {
      user.username = username;
      user.userData = updatedUser.userData;
    }
  });
  users = newUsers;
  res.redirect('/admin/AllEmployeeList');
});

// Delete Employee GET
router.get('/delete/:id', (req, res) => {
  console.log(req.params.id);

  var newUsers = users.filter((user) => user.id !== req.params.id);
  console.log(newUsers);
  users = newUsers;

  res.redirect('/admin/AllEmployeeList');
});

module.exports = router;
