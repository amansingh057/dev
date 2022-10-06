const express = require('express')
const https = require('https');
const body_parser = require("body-parser")

const app = express()
app.use(body_parser.urlencoded({extended:true}))

app.get("/",function(req,res){
    
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    const query = req.body.cityName;
    const apiKey = "c24cf79cb564fab5e97ff7e70799584f"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit
    https.get(url,function(response){
        console.log(response.statusCode)
        response.on("data",function(data){
            const weatherData = JSON.parse(data); //We wil get a buffer data so we have to covert it by json parse
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const imgurl ="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<p>The Weather is Currently "+ description +"</p>");
            res.write("<h1>The temprature in "+query+" is "+ temp + " Degree Celcius.</h1>");
            res.write("<img src="+imgurl+">")
            res.send()
        })
    })
})



app.listen(3000,function(){
    console.log("Server running on port 3000...")
})