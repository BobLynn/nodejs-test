const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const db = new sqlite3.Database('./mike.db')

app.get('/property-content', function(req, res) {
    db.all('SELECT * FROM users', function(err, rows) {
      res.send(rows)
    })
  })
  

  app.listen(3000, function() {
    console.log('Server is running on port 3000')
  })