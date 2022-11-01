let RandomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomdice1 = "images/dice"+RandomNumber1+".png";
let RandomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomdice2 = "images/dice"+RandomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomdice1);
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}else if(RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}