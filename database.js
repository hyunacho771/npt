
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'x8autxobia7sgh74.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
 	user: 't3ldrriau8s5xc5s',
 	password: 'gcsrvmc917710jg2',
 	database: 'e8wmacpj3jycp4gz',
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
