var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg1="images/dice"+randomNumber1 +".png"
var randomimg2="images/dice"+randomNumber2 +".png"
document.images[0].setAttribute("src",randomimg1);
document.images[1].setAttribute("src",randomimg2);

if(randomNumber1>randomNumber2){
    var winner="Player 1 wins!!!"
}
if(randomNumber1<randomNumber2){
    var winner="Player 2 wins!!!"
}
if(randomNumber1===randomNumber2){
    var winner="Its a - Draw!!!"
}
document.querySelector("h1").innerHTML=winner;