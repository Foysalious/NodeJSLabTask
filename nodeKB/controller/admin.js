var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.render('admin/index');
});

router.get('/AddEmployee', function(req, res){
	res.send('Hello World');
});

router.get('/AllEmployeeList', function(req, res){
	res.send('Hello World');
});

router.get('/update/{id}', function(req, res){
	res.send('Hello World');
});

router.get('/de;ete/{id}', function(req, res){
	res.send('Hello World');
});




module.exports = router;
