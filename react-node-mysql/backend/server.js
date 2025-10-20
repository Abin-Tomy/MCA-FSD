// ===== server.js =====
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // XAMPP default
  database: 'testdb'
});

db.connect(err => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// ----------------- CRUD Routes -----------------

// ✅ READ all users
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// ✅ CREATE new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: 'User added successfully' });
  });
});

// ✅ UPDATE user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(sql, [name, email, id], (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: 'User updated successfully' });
  });
});

// ✅ DELETE user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: 'User deleted successfully' });
  });
});

// -------------------------------------------------

app.listen(8081, () => {
  console.log('✅ Server running on port 8081');
});
