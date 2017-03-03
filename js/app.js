// modules
const express = require('express')
const app = express()

const mongo = require('mongodb').MongoClient
  , assert = require('assert');


// global variables
const port = 8080;
const databaseURL = 'mongodb://localhost:27017/irishlink';


// database functions
function retrieveAll(db, collectionName, response) {
	var collection = db.collection(collectionName);
	collection.find({}, { _id: 0 }).toArray( function(err, allData) {
			assert.equal(err, null);
			console.log("Successfully Sent JSON data");
			response.json(allData[0]);
	});
}



// routing
app.get('/ideas', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		retrieveAll(db, 'ideas', res);
		db.close();
	});
})

app.get('/developers', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		retrieveAll(db, 'developers', res);
		db.close();
	});
})

app.get('/*', function (req, res) {
	res.send('Invalid API call');
})



// prettify JSON
app.set('json spaces', 4);

// listen on port
app.listen(port, function () {
  console.log(`App running at http://54.82.225.169:${port}`);
})
