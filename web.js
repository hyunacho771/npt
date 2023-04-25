const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
app.use('/dist', express.static( __dirname + '/dist'));
import { readFile } from 'fs';
// 8000번 포트로 지정
const port = 8001;

// 화면 엔진은 ejs로 설정한다.
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.engine('ejs', require('ejs').__express);

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('views', __dirname + '/views');

// http://localhost:3000/
app.get('/login', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/main', function(req, res) {
	// If the user is loggedin
	if (req.session.loggedin) {
		// Output username
		res.sendFile(__dirname + '/main.html');
	} else {
		// Not logged in
		res.send('Please login to view this page!');
	}
	//response.end();
});

app.get('/', function(req, res){
    res.sendFile( __dirname + '/main.html')
})


var router = express.Router();

var database = require('C:/Users/minjo/OneDrive/문서/GitHub/npt/database.js');

app.post('/login', function(request, response) {
	// Capture the input fields
	let email = request.body.email;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		database.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length >= 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = email;
				// Redirect to home page
				response.redirect('/main');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/image_3', (req, res) => {
	readFile('image_3.png', (err, data) => {
	  if(err) { res.send() }
	  res.send(data)
	})
})


router.get('/logout', function(request, response, next){

    request.session.destroy();

    response.redirect("/");

});


module.exports = router;

app.listen(8001);