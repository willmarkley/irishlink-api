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
function retrieveAll(db, collectionName, response, requestbody) {
	console.log("=====>"+JSON.stringify(requestbody)+"<=====")
	var collection = db.collection(collectionName);
	var tok = requestbody.token
	console.log("=====>"+JSON.stringify(tok)+"<=====")
	//if (tok){
		collection.find({}, { _id: 0}).toArray( function(err, allData) {
			assert.equal(err, null);
			for (var i=0; i<allData.length; i++){
				if (allData[i].token==tok){
					allData[i].mod = 1;
				}
				else {
					allData[i].mod = 0;
				}
				delete allData[i].token;
			}
			console.log("Successfully Sent JSON data");
			response.json(allData);
		});
/*	}
	else {
		console.log("Invalid Token");
		response.send("Invalid Token");
	}*/
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

function deleteEntry(db, collectionName, data, response) {
	var collection = db.collection(collectionName);
	console.log(data);
	collection.deleteOne(data, function(err, result) {
		assert.equal(err, null);
		if (result.result.n!=1){
			console.log("The document with the given token was NOT removed");
			response.send("The document with the given token was NOT removed");
		}else{
			console.log("Removed the document with the given token");
			response.send("Removed the document with the given token");
		}
	});
}


// routing
app.use(bodyParser.json());


app.put('/ideas', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		retrieveAll(db, 'ideas', res, req.body);
		db.close();
	});
})

app.put('/developers', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		retrieveAll(db, 'developers', res, req.body);
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

app.delete('/ideas', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		deleteEntry(db, 'ideas', req.body, res);
		db.close();
	});
})

app.delete('/developers', function (req, res) {
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to mongo server");
		deleteEntry(db, 'developers', req.body, res);
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
