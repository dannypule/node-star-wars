const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extend: true}));

app.get('/', (req, res) => {

	db.collection('quotes').find().toArray(function(err, results){
		console.log(results);
	});
	res.sendFile(__dirname + '/index.html'); 
});

app.post('/quotes', (req, res) => {
	// console.log(req.body);

	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err);

		console.log('saved to database');
		res.redirect('/');
	});
});

MongoClient.connect('mongodb://star_wars:rollingstones@ds055935.mongolab.com:55935/star_wars', (err, database) => {
  // ... start the server
  if (err) return console.log(err);

  db = database;

  app.listen(3000, () => {
  	console.log("Listening on port 3000.");
  });
});