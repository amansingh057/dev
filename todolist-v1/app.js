//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname+"/date.js")


const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

var items =["Buy Food","Cook The food","Eat the food"];
var WorkItems = []
app.get("/",function(req,res){
    let day = date.getDate()
    // if(today.getDay()== 6 || 0)
    //     day = "weekend!"
    // }else{
    //     day = "weekday"
    // }
    // day = arr[today.getDay()]
    res.render('list',{ListTitle: day,newListItem:items});
})



app.get("/work",function(req,res){
    res.render("list",{ListTitle: "Work List",newListItem:WorkItems});
})

app.get("/about",function(req,res){
    res.render("about")
})

app.post('/',function(req,res){
    console.log(req.body)
    var item = req.body.newItem
    if(req.body.list ==="Work"){
        WorkItems.push(item)
        res.redirect('/work');
    }else{
        items.push(item)
        res.redirect('/');
    }
})

app.listen(process.env.PORT || 3000,function(){
    console.log("Running at port 3000")
})