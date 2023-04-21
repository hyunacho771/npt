
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '10.0.0.1',
  user: 'minjokwindows',
  password: 'finestra771',
  database: 'test',
  port: '3306',
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;