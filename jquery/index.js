// $(document).ready(function(){
//     $("h1").css("color","red");
// })

// $("h1").css("color","green");
$('h1').addClass("big-title margin50")
$('button').text("don't click me")
// $('button').html("<p>HII</p>")
console.log()
$('a').attr("href","http://www.yahoo.com")
$('h1').click(function(){
    $("h1").css("color","purple")
})
// $("button").click(function(){
//     $("h1").css("color","purple")
// })
$("input").keypress(function(e){
    console.log(e.key)
})
$(document).keypress(function(e){
    console.log(e.key)
})
$(document).keypress(function(e){
    $("h1").text(e.key)
})
// $("h1").on("mouseover",function(e){
//     $("h1").text("GA")
// })
$("button").on("click",function(){
    // $("h1").fadeToggle()
    // $("h1").animate({opacity : 0.5})
    $("h1").slideUp().slideDown().animate({opacity : 0.5})
    
})



