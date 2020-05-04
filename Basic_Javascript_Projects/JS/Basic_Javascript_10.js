//counting loop 
function count() {
    var digit="";
    var c=1;
    while (c < 21) {
        digit += "<br>" + c;//<br> works same way as in HTML
        c++;
    }
    document.getElementById("loop").innerHTML= digit;
}

//string length property
function length_of_str() {
    var str = "Tomatoes";
    var len = str.length;
    document.getElementById("str_length").innerHTML=len;
}

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y;
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function() {
    var face_ex= [];
    face_ex[0] = "smiling";
    face_ex[1] = "frowning";
    face_ex[2] = "laughing";
    face_ex[3] = "crying";
    document.getElementById("Array").innerHTML = "The girl is " + face_ex[2] +"."
}

//constant function
function constant_function() {
    const fast_food ={type:"donut", brand:"Dunkins", flavor:"lemon"};
    fast_food.flavor = "blueberry";
    fast_food.price = "$2.00";
    document.getElementById("Constant").innerHTML= "If you'd like a " + fast_food.flavor +" " + fast_food.type + " from " + fast_food.brand + ", you'll need to pay a total of " + fast_food.price + ".";
}

//Let keyword
function let_key() {
    var v=525;
    document.getElementById("let1").innerHTML=v;
    {
        let v= 252;
        document.getElementById("let2").innerHTML=v;
    }
   document.getElementById("let3").innerHTML=v;
}


//return statement
function returnFunc(name){
    
    return  "Hello, "+ name;
    }
document.getElementById("return").innerText = returnFunc("bob");
//not returning at all...

function car_func(){
    let car = {
        make: "Ford",
        model: "Taurus",
        year: "1990",
        color: "red" ,
        description, myfunction() {
        return  "The car is a "+ this.color + " " +this.year + this.make + this.model;
            
        }
    }
     document.getElementById("car_object").innerHTML= car.description();
}