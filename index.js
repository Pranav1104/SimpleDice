// for image 1 random dice images will be generated as follows

var randomNumber1 = (Math.random() * 6) + 1 ;

randomNumber1 = Math.floor(randomNumber1);

var randomDice1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png 

randomDice1 = "images/" + randomDice1; // because it is in images folder thats why......

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1);

// similarly for image 2 

var randomNumber2 = Math.floor(Math.random()*6) + 1 ;

var randomDice2 = "images/dice" + randomNumber2 + ".png" ;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

// now, we have to show a winner of this game i h1 tag

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML ="Player 1 WINS!!!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML ="Player 2 WINS!!!";
}
else
{
    document.querySelector("h1").innerHTML ="DROW!!!";
}
