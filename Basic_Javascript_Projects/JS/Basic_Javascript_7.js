function Add_num() {
    var x = 1;
    document.write(19 + x + "<br>");
}

function Add_deux() {
    document.write(x+21);
}
Add_num();
Add_deux();

function Add_num1() {
    var x =1;
    console.log(9 + x);
}

function Add_num2() {
    console.log( x + 21);
}

Add_num1();
Add_num2();//x is undefined


function dandt() {
    if (new Date().getHours() > 12) {
    document.getElementById("time").innerHTML = "How are you today?";
    }
}

function myfunc() {
    if (22 >= 20) {
        document.getElementById("grtlss").innerHTML= "22 is greater than 20.";
    }
}

function myage() {
    Age = document.getElementById("age").value;
    if (Age >= 55){
        yearly = "Eligible for senior discount";
    }
    else {
        yearly = "Not eligible for senior discount";
    }
    document.getElementById("HowOld").innerHTML = yearly;
}

function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time > 12 == Time> 0) {
        Reply ="It is morning time!";
    }
    else if (Time>12 == Time<18) {
        Reply= "It is the afternoon.";
    }
    else {
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}