const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",function(req,res){
    res.sendFile(__dirname +"/signup.html")
})
app.post("/",function(req,res){
    var firstName = req.body.fname
    var lastName = req.body.lname
    var email = req.body.email
    var data = {
        members:[
            {
                from_email:email
            }
        ]
    }
    console.log(firstName,lastName,email)
})
app.listen(process.env.PORT || 3000,function(){
    console.log("Running at port 3000")
})

// 13c765237fc4253d14bc2dcbefc5087b-us9
// 863dde7c1d