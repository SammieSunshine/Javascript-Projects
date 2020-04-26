//variable typeof exercise
function str(){
    document.write(typeof "human"); //output string
}

function num(){
    document.write(typeof 42); //output number
}
//infinity/ -infinity exercise
function inf(){
    document.write(4E502);//output infinity
}

function neginf(){
    document.write(-4E502);//output -infinity
}

//boolean logic exercise
function booltru(){
    document.write([5>4]);//output true
}

function boolfa(){
    document.write([5>6]);//output false
}


console.log(4+3);//console log assignment

function coer(){
    document.write("42"+9); //type coercion
}

function consbool(){
    console.log(4<3);//boolean using console log. returns false
}

function dubeq(){
    document.write(80==80);//double equal returns true

}

function dubfal(){
    document.write(9==80);//double equal returns false

}

//triple equal assigment
function triptru(){
    var x="Nice One";
    y="Nice One";
    document.write(x===y);//returns true
}


function dddv(){
    var m="yesterday";
    n=1;
    document.write(m===n);//returns false
}

function ddsv(){
    var q="one";
    r=1;
    document.write(q===r);//returns false

}


function sdsv(){
    var a= 2;
    b=two;
    document.write(a===b);//returns false

}

function and1(){
   document.write(28>13 && 13>12);//Logical operater and. true

}

function and2(){
    document.write(28>13 && 13<12);//Logical operator and. false
}

function or1(){
    document.write(28>13 || 31>13);//Logical operator OR. true
}

function or2(){
    document.write(18<13 || 31<13);//Logical operator OR. false
}

function nott(){
    document.getElementById("not").innerHTML=!(180<100);
}

function notf(){
    document.getElementById("not1").innerHTML=!(180<200);
}