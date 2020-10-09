var a = document.getElementsByClassName("Valor-de-a").innerText;
var b = document.getElementsByClassName("Valor-de-b").innerText;
var c = document.getElementsByClassName("Valor-de-c").innerText;

var delta = (b*b)-4*a*c
var x1 = (-b+Math.sqrt(delta))/(2*a)
var x2 = (-b-Math.sqrt(delta))/(2*a)

function calcular(){
    alert('a,b,c');
}

