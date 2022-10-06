const express = require('express')
const body_parser = require("body-parser")
const app = express();

app.use(body_parser.urlencoded({extended : true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    var num1 = req.body.num1
    var num2 = req.body.num2
    var result = Number(num1)+Number(num2)
    res.send("The result of calculation is " + result)
})
app.get('/BMIcalculator',function(req,res){
    res.sendFile(__dirname+"/BMIcalculator.html")
})
app.post('/BMIcalculator',function(req,res){
    var weight = parseFloat(req.body.n1);
    var height = parseFloat(req.body.n2);
    var bmi = weight / (height*height);
    res.send("your bmi is " + bmi)
})
app.listen(3000,function(){
    console.log("Running on port 3000...")
})