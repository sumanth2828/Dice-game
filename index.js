var n1=Math.floor(Math.random()*6)+1;
n1="images/dice"+n1+".png";
 document.querySelector(".img1").setAttribute("src",n1);


var n2=Math.floor(Math.random()*6)+1;
n2="images/dice"+n2+".png";
document.querySelector(".img2").setAttribute("src",n2);

if(n1>n2)
document.querySelector("h1").innerHTML="player 1 wins";
else if(n1<n2)
document.querySelector("h1").innerHTML="player 2 wins";
else
document.querySelector("h1").innerHTML="its a draw match";
