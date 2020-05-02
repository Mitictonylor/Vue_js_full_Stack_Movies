const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js');

app.use(cors())

//create the connection between mongoClient and our server
MongoClient.connect('mongodb://localhost:27017')
.then((client) =>{
  //associate the db name
const db = client.db('movies_db');
//associate the collection name
const moviesCollection = db.collection('movies');
//we invoke the create Router passing the collection as an argument
const moviesRouter = createRouter(moviesCollection);
//using express, we associate the route to the Router we just created
app.use('/api/movies', moviesRouter);
})//in case of an error we catch it so we can see what it is
.catch(console.error);

//we say to the server to be always ready to listen for calls
app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port }`);
})
