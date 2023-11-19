 const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql@9',
  database: 'profile',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Define your API endpoints here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/api/profiles/:username', (req, res) => {
    const username = req.params.username;
    const query = 'SELECT *  FROM users WHERE name = ?';
  
    db.query(query, [username], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      }
    });
  }); 

  app.get('/api/profiles/:username/details', (req, res) => {
    const username = req.params.username;
    const query = 'SELECT work, education, research, awards FROM users WHERE name = ?';
  
    db.query(query, [username], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      }
    });
  });
  