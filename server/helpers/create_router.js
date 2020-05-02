const express = require('express');
//to be able to work with the mongodb automatic id, we have
//to require just the ObjectID from the mongodb packet
const ObjectID = require('mongodb').ObjectID

//this is the anonymous function that we gonna use in server.js
const createRouter = function (collection){
  //we invoke the router from express
  const router = express.Router();

  //we set up the router for when it will hit /
  // and get all the data
  router.get('/', function(req,res){
    //we want to give all the data of the db collection back
    //we can use the mongodb find(), but is gonna bring us back
    //a cursor(a mongodb object), so we need to transform it to an array
    collection.find().toArray()//gonna bring us a promise
    //as response it will bring me the documents and convert
    //them into Json format
    .then(docs => res.json(docs))//in case of any error
    .catch((error) =>{
      console.error(error);//log me the error
      res.status(500)//show this error on the browser
      res.json({error: error})
    })
  });
//find the single game using the ID
  router.get('/:id', function(req,res){
    //using the mongodb ObjectID we can have access to the single element of the db
    const id = ObjectID(req.params.id);
    collection.findOne({_id: id})
    .then(doc => res.json(doc))
  });

  //delete a specific one using the ID
  router.delete('/:id', function(req,res){
    const id = ObjectID(req.params.id);
    collection.deleteOne({_id: id})
    .then(doc => res.json(doc))
  })
  return router;
};

module.exports = createRouter
