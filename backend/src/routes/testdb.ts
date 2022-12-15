import { Router } from 'express';
const router = Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  port: process.env.DB_PORT,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect(function(err: any) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT id, alert_id FROM events', function(err: any, rows: { solution: any; }[]) {
  if (err) throw err;
  console.log('The solution is: ', rows[0]);
});

connection.end();
  

router.get('/', (_, res) => {
  res.status(200).json({
    greetings: 'Here is the test db controller !!!',
  });
});

module.exports = router;
