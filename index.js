var randomNumber1= Math.floor(Math.random() * 6) + 1;
var x= "dice" +randomNumber1 + ".png";
var y= x;
var b = document.querySelectorAll("img")[0];
  b.setAttribute("src",y);
  var randomNumber2= Math.floor(Math.random() * 6) + 1;
  var z= "dice" +randomNumber2 + ".png";
  var t=z;
var c=document.querySelectorAll("img")[1];
c.setAttribute("src",t);

if(randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML="🚩PLayer 1 wins";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="PLayer 2 wins🚩";
}
else
{
  document.querySelector("h1").innerHTML="Draw";

}
