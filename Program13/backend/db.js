// backend/db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: '', // your MySQL password
  database: 'testdb',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;
