var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('Hello World');
});

router.get('/MyProfile', function(req, res){
	res.send('Hello World');
});

router.get('/UpdateProfile', function(req, res){
	res.send('Hello World');
});



module.exports = router;
