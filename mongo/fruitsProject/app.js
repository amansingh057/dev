const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fruitsDB");
  var myobj = [
    {
        name : "Apple",
        score :8,
        review : "Great fruit"
      },
      {
        name : "Orange",
        score :6,
        review : "Kinda Sour"
      },
      {
        name : "Banana",
        score :9,
        review : "Great stuff"
      }
  ];
//   dbo.collection("fruits").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("fruitsDB");
    dbo.collection("fruits").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });