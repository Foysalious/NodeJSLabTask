var express = require('express');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var employee 		= require('./controller/employee');
var admin 		= require('./controller/admin');
// App initialization
var app 		= express();

//config
app.set('view engine', 'ejs');

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })


//middleware
app.use(bodyParser());
app.use('/login', login);
app.use('/employee', employee);
app.use('/admin', admin);



app.listen(3000, function(){
	console.log('express http server started at...3000');
});
