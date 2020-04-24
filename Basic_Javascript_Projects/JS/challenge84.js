function pie() {
document.getElementById("round").innerHTML=Math.PI;
}

function round(){
    document.getElementById("round1").innerHTML=Math.round(8.1);
}

function thwip(){
    document.getElementById("pow").innerHTML=Math.pow(10,4);
}

function root1(){
    document.getElementById("square").innerHTML=Math.sqrt(30);
}

function abs(){
    document.getElementById("pos").innerHTML=Math.abs(-9);
}

function round2(){
    document.getElementById("up").innerHTML=Math.ceil(18.7);
}

function floor(){
    document.getElementById("down").innerHTML=Math.floor(18.7);
}

function abs(){
    document.getElementById("pos").innerHTML=Math.abs(-9);
}


function sin(){
    document.getElementById("radians").innerHTML=Math.sin(80);
}

function sin2(){
    document.getElementById("degree").innerHTML= Math.sin(80*Math.PI/180);
}

function cos(){
    document.getElementById("rad").innerHTML=Math.cos(200);
}

function cos2() {
    document.getElementById("deg").innerHTML=Math.cos(200*Math.PI/180);
}

function min(){
    document.getElementById("min").innerHTML=Math.min(10, 1, 0, 7);
}

function max(){
    document.getElementById("max").innerHTML=Math.max(10, 1, 0 , 7);
}

function random(){
    document.getElementById("rando").innerHTML=Math.random();
}

function plus(){
    var x= 18+2;
    document.getElementById("add").innerHTML="18 + 2 =" +x;
}

function minus(){
    var y= 18-2;
    document.getElementById("subt").innerHTML="18 - 2 =" +y;
}

function mult(){
    var z= 18*2;
    document.getElementById("mult").innerHTML="18 x 2 =" +z;
}

function rem(){
    var a=19%2;
    document.getElementById("remainder").innerHTML="The remainder of 19/2 is: " + a;
}

function doub(){
    var b=18;
    b++;
    document.getElementById("incr").innerHTML=b;
}

function doubmin(){
    var c=18;
    c--;
    document.getElementById("dec").innerHTML=c;
}

