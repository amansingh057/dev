const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

app
  .route("/articles")
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      // console.log(foundArticles)
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Success");
      }
    });
  });


// app.delete("/articles",function(req,res){
//     Article.deleteMany(function(err){
//         if(!err){
//             console.log("Successfully Deleted")
//         }else{
//             console.log(err)
//         }
//     })
// })

// Specific aricle

app.route("/articles/:articleTitle").get(function(req,res){
    Article.findOne({title:req.params.articleTitle},function(err,found){
        if(found){
            res.send(found)
        }else{
            res.send("cannot find")
        }
    })
}).put(function(req,res){
    Article.updateOne({title:req.params.articleTitle},{title:req.body.title,content:req.body.content},{overwrite:true}, function(err,result){
        if(err){
            res.send("ERROR!!!")
        }else{
            res.send(result)
        }
    })
}).patch(function(req,res){
    Article.updateOne({title:req.params.articleTitle},{$set:req.body},function(err,result){
        if(!err){
            res.send("Success patch")
        }else{
            res.send("EERROR")
        }
    })
}).delete(function(req,res){
    Article.deleteOne({title:req.params.articleTitle},function(err){
        if(!err){
            res.send("Deleted Success")
        }else{
            res.send(err)
        }
    })
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
