//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))

var items =["Buy Food","Cook The food","Eat the food"];
app.get("/",function(req,res){
    var today = new Date()
    day = "weekend"
    // var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
    var day = today.toLocaleDateString("en-US",options)
    // if(today.getDay()== 6 || 0)
    //     day = "weekend!"
    // }else{
    //     day = "weekday"
    // }
    // day = arr[today.getDay()]
    res.render('list',{Kindofday:day,newListItem:items});
})
app.post('/',function(req,res){
    var item = req.body.newItem
    items.push(item)
    res.redirect('/');
})

app.listen(process.env.PORT || 3000,function(){
    console.log("Running at port 3000")
})