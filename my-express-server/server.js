const express = require('express');
const app = express();

app.get('/',function(request,response){
    // console.log(request);
    response.send('<h1>Hello World</h1>')

})
app.get('/contact',function(request,response){
    // console.log(request);
    response.send('<h1>Contact me at aman@gmail.com</h1>')

})
app.get('/about',function(request,response){
    // console.log(request);
    response.send('<h1>My name is Aman Singh and i love coding.</h1>')

})
app.get('/hobbies',function(request,response){
    // console.log(request);
    response.send('<h1> <ul><li>Read</li> <li>Code</li> <li>Anime</li></ul> </h1>')

})

app.listen(3000,function(){
    console.log("Server started at 3000");
});