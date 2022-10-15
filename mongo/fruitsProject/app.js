// const MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

const mongose = require('mongoose')
mongose.connect("mongodb://localhost:27017/fruitsDB")

const fruitsSchema = new mongose.Schema({
  name:String,
  rating:Number,
  review:String
})
const Fruit = mongose.model("Fruit",fruitsSchema)

const fruit = new Fruit({
  name : "Apple",
  score :8,
  review : "Great fruit"
})
// fruit.save()
