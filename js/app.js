// modules
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const mongo = require('mongodb').MongoClient
  , assert = require('assert');


// global variables
const port = 8080;
const databaseURL = 'mongodb://localhost:27017/irishlink';


// database functions
function retrieveAll(db, collectionName, response) {
	var resData = {}
	var collection = db.collection(collectionName);
	collection.find({}, { _id: 0, token: 0}).toArray( function(err, allData) {
			assert.equal(err, null);
			console.log("Successfully Sent JSON data");
			resData["entries"] = allData;
			response.json(allData);
	});
}

function addEntry(db, collectionName, data, response) {
	var collection = db.collection(collectionName);
	if (!Object.keys(data).length) {  // json  data is empty
		console.log("JSON data is empty");
		response.send("JSON data is empty");
	}
	else {
		console.log(data);
		collection.insertOne(data, function(err, result) {
			assert.equal(err, null);
			assert.equal(1, result.insertedCount);
			console.log("Successfully added JSON data");
			response.send("Successfully added JSON data");
		});
	}
}



// routing
app.use(bodyParser.json());

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

app.post('/ideas', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		addEntry(db, 'ideas', req.body, res);
		db.close();
	});
})


app.post('/developers', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		addEntry(db, 'developers', req.body, res);
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
