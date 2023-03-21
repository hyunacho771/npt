
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'nptkmla.cafe24app.com/',
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