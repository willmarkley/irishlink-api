const http = require('http');
const mongo = require('mongodb').MongoClient
  , assert = require('assert');

const hostname = '172.31.49.62';
const port = 8080;
const databaseURL = 'mongodb://localhost:27017/nodemongo';


// database functions
function readAll(db, collectionName, response) {
	var results;
	var collection = db.collection(collectionName);
	collection.find({}, { _id: 0 }).toArray( function(err, allData) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(allData);
		//console.log(JSON.stringify(allData));
		response.end(JSON.stringify(allData));
        });
}





var server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	//var data;
	mongo.connect(databaseURL, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		readAll(db, 'test', res);
		db.close();
	});
	//var json = JSON.stringify( data );
	//console.log(json);
	//res.end(json);
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log('Public access at http://54.197.7.212:8080');
});



