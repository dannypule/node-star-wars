const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extend: true}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html'); 
});

app.post('/quotes', (req, res) => {
	console.log(req.body);
});

MongoClient.connect('ds055935.mongolab.com:55935/star_wars', (err, database) => {
  // ... start the server
  if (err) return console.log(err);

  db = database;


  app.listen(3000, () => {
  	console.log("Listening on port 3000.");
  });
});