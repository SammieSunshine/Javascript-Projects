function addition_function() {
    var addition= 10+5;
    document.getElementById("Math").innerHTML="10 + 5 =" + addition;
}

function subtract() {
    var sub= 15-5;
    document.getElementById("Sub").innerHTML="15 - 5 =" + sub;
}

function multiply() {
    var Multiply= 10*10;
    document.getElementById("Mult").innerHTML="10 x 10 ="+ Multiply;

}

function divide() {
    var slash= 100/2;
    document.getElementById("Di").innerHTML="100 / 2 =" +slash;
}

function all_ops() {
    var all=(10+5) * 100/2 -10;
    document.getElementById("all").innerHTML= "10 plus 5, multiplied by 100 divided in half, and then subtracted by 10 =" +all;
}

function modulus(){
    var modop= 50%9;
    document.getElementById("mod").innerHTML="When 50 is divided by 9, the remainder would be: " +modop;
}

function negation(){
    var x= 2;
    document.getElementById("neg").innerHTML=-x;
}

var t = 18; {
t++;
document.write(t)
}

var a=20; {
    a--;
    document.write(a);
}

window.alert(Math.random() *8);